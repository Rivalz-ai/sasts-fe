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

function App() {
    const {data: clientRunningInfo, isSuccess: getRunningInfoSs} = useQuery({
        queryKey: ["clientRunningInfo"],
        queryFn: () => RivalzApi.getClientRunningInfo()
    })

    const {data: systemInfo, isSuccess: getSystemInfoSs} = useQuery({
        queryKey: ["systemInfo"],
        queryFn: () => RivalzApi.getSystemInfo()
    })

    return (
        <Background>
            <Header/>
            <AppWrapper alignItems="center" gap={{ base: '20px', lg: '40px' }} py={10}>
                <HeaderPage title="RIVALZ NETWORK DATA" breadCrumb={BreadCrumb} />
                {
                    getSystemInfoSs ? <ClientContainer data={systemInfo} /> : <Loading />
                }
                {
                    getRunningInfoSs ? <CountryRunning data={clientRunningInfo}/> : <Loading />
                }
                <TotalClient />
                <TotalDataSpace />
            </AppWrapper>
            <Footer/>
        </Background>
    )
}

export default App
