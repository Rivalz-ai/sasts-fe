import Container from "../Container.jsx";
import {Flex} from "@chakra-ui/react";
import CountryRunningMap from "./CountryRunningMap.jsx";
import CountryList from "./CountryList.jsx";
import {BORDER_STYLE} from "../../themes/index.js";

const CountryRunning = ({data}) => {
    return (
        <Container
            p={{ base: 5, lg: 0 }}
        >
            <Flex
                flexDirection={{ base: 'column', lg: 'row' }}
                bg={{ base: 'none', lg: '#071009' }}
                border={{ base: 'none', lg: BORDER_STYLE }}
            >
                <CountryRunningMap />
                <CountryList data={data} />
            </Flex>
        </Container>
    )
}

export default CountryRunning;