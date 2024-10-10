import Container from "./Container.jsx";
import {Flex} from "@chakra-ui/react";
import {BORDER_STYLE} from "../themes/index.js";
import ChartHeader from "./Chart/ChartHeader.jsx";
import LineChartDetail from "./Chart/LineChartDetail.jsx";

const TotalClient = ({data, labels}) => {
    return (
        <Container px={'unset'}>
            <Flex
                bg={{ base: 'none', lg: '#071009' }}
                border={{ base: 'none', lg: BORDER_STYLE }}
                borderLeft={'none'}
                flexDirection={'column'}
                gap={4}
            >
                <ChartHeader title={'TOTAL rCLIENTS'} px={{base: 20, lg: 0}}/>
                <LineChartDetail data={data} labels={labels} px={{base: 5, lg: 0}}/>
            </Flex>
        </Container>
    )
}
export default TotalClient;