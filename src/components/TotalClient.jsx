import Container from "./Container.jsx";
import {Flex} from "@chakra-ui/react";
import {BORDER_STYLE} from "../themes/index.js";
import ChartHeader from "./Chart/ChartHeader.jsx";
import LineChartDetail from "./Chart/LineChartDetail.jsx";

const TotalClient = () => {
    return (
        <Container px={{base: 20, lg: 'unset'}}>
            <Flex
                bg={{ base: 'none', lg: '#071009' }}
                border={{ base: 'none', lg: BORDER_STYLE }}
                borderLeft={'none'}
                flexDirection={'column'}
                gap={4}
            >
                <ChartHeader title={'TOTAL rCLIENTS'} />
                <LineChartDetail />
            </Flex>
        </Container>
    )
}
export default TotalClient;