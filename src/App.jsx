import Header from "./layout/Header.jsx";
import Background from "./layout/Background.jsx";
import Footer from "./layout/Footer.jsx";
import AppWrapper from "./components/AppWrapper.jsx";
import {BreadCrumb} from "./utils/index.js";
import HeaderPage from "./components/HeaderPage.jsx";
import ClientContainer from "./components/Client/ClientContainer.jsx";
import CountryRunning from "./components/CountRunnning/CountryRunning.jsx";
import TotalClient from "./components/TotalClient.jsx";
import TotalDataSpace from "./components/TotalDataSpace.jsx";
import {useQuery} from "@tanstack/react-query";
import RivalzApi from "./utils/axios/RivalzApi.js";
import Loading from "./components/Loading.jsx";
import useConnection from "./utils/zustand.config.js";
import {useEffect, useState} from "react";
import moment from "moment";

function App() {
    const {chartType} = useConnection();

    const [chartLabels, setChartLabels] = useState([]);
    const [clientChartData, setClientChartData] = useState([]);
    const [storageChartData, setStorageChartData] = useState([]);

    const {data: clientRunningInfo, isSuccess: getRunningInfoSs} = useQuery({
        queryKey: ["clientRunningInfo"],
        queryFn: () => RivalzApi.getClientRunningInfo()
    })

    const {data: systemInfo, isSuccess: getSystemInfoSs} = useQuery({
        queryKey: ["systemInfo"],
        queryFn: () => RivalzApi.getSystemInfo()
    })

    const {data: chartData, isSuccess: getChartDataSs} = useQuery({
        queryKey: ["chartData", chartType],
        queryFn: () => RivalzApi.getChartData(chartType)
    })

    useEffect(() => {
        if (!chartData) return;
        getChartLabels();
        getClientChartData();
        getStorageChartData();
    }, [chartData]);

    const getChartLabels = () => {
        let labels = [];
        switch (chartType) {
            case "DAY":
                labels = chartData.map(data => moment(data._id.date).format('MMM D, YYYY'));
                break;
            case "WEEK":
                labels = chartData.map(data => moment(data._id.date).format('WW YYYY'));
                break;
            case "MONTH":
                labels = chartData.map(data => moment(data._id.date).format('MMM YYYY'));
                break;
            default:
                break;
        }
        setChartLabels(labels);
    }

    const getClientChartData = () => {
        const data = chartData.map(data => data.totalNodes);
        setClientChartData(data);
    }

    const getStorageChartData = () => {
        const data = chartData.map(data => data.totalDisk);
        setStorageChartData(data);
    }

    return (
        <Background>
            <Header/>
            <AppWrapper alignItems="center" gap={{base: '20px', lg: '40px'}} py={10}>
                <HeaderPage title="RIVALZ NETWORK DATA" breadCrumb={BreadCrumb}/>
                {
                    getSystemInfoSs ? <ClientContainer data={systemInfo}/> : <Loading/>
                }
                {
                    getRunningInfoSs ? <CountryRunning data={clientRunningInfo}/> : <Loading/>
                }
                {
                    getChartDataSs ? <TotalClient data={clientChartData} labels={chartLabels}/> : <Loading/>
                }
                {
                    getChartDataSs ? <TotalDataSpace data={storageChartData} labels={chartLabels}/> : <Loading/>
                }
            </AppWrapper>
            <Footer/>
        </Background>
    )
}

export default App
