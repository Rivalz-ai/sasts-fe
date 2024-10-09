import {Flex} from "@chakra-ui/react";
import {BORDER_STYLE} from "../themes/index.js";
import ChartHeader from "./Chart/ChartHeader.jsx";
import Container from "./Container.jsx";
import LineChartDetail from "./Chart/LineChartDetail.jsx";

const TotalDataSpace = ({data, labels}) => {
    return (
        <Container px={{base: 20, lg: 'unset'}}>
            <Flex
                bg={{ base: 'none', lg: '#071009' }}
                border={{ base: 'none', lg: BORDER_STYLE }}
                borderLeft={'none'}
                flexDirection={'column'}
            >
                <ChartHeader title={'TOTAL DATA SPACE'} />
                <LineChartDetail data={data} labels={labels} />
            </Flex>
        </Container>
    )
}
export default TotalDataSpace;