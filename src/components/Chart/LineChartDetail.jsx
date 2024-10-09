import {Chart as ChartJS, registerables} from "chart.js";
import {Flex} from "@chakra-ui/react";
import {Line} from "react-chartjs-2";
import {LineChartOptions} from "../../utils/index.js";

ChartJS.register(...registerables);

const LineChartDetail = ({data, labels}) => {
    return (
        <Flex h="400px">
            <Line
                options={LineChartOptions}
                data={{
                    labels,
                    datasets: [
                        {
                            data,
                            fill: true,
                            borderColor: '#69FF93',
                            backgroundColor: '#003300',
                        },
                    ],
                }}/>
        </Flex>
    )
}

export default LineChartDetail;