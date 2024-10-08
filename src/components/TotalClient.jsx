import Container from "./Container.jsx";
import {Flex} from "@chakra-ui/react";
import {BORDER_STYLE} from "../themes/index.js";
import ChartHeader from "./Chart/ChartHeader.jsx";

const TotalClient = () => {
    return (
        <Container p={'unset'}>
            <Flex
                bg={{ base: 'none', lg: '#071009' }}
                border={{ base: 'none', lg: BORDER_STYLE }}
            >
                <ChartHeader title={'TOTAL rCLIENTS'} />
            </Flex>
        </Container>
    )
}
export default TotalClient;