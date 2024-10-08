import {Flex} from "@chakra-ui/react";
import {Text14Px400} from "../Text/index.jsx";
import CountryDetail from "./CountryDetail.jsx";

const CountryList = () => {
    return (
        <Flex
            flexDirection="column"
            w={"full"}
            flex={1}
        >
            <Flex
                justifyContent={"space-between"}
                display={"flex"}
                bg={"#69FF9314"}
                p={3}
            >
                <Text14Px400
                    color="#69FF93"
                    fontSize={{ base: '12px', lg: '14px' }}
                >
                    Country
                </Text14Px400>
                <Text14Px400
                    color="#071009"
                    fontSize={{ base: '12px', lg: '14px' }}
                >
                    Storage providers
                </Text14Px400>
            </Flex>
            <Flex
                h={410}
                flexDirection="column"
                overflowY="auto"
            >
                <CountryDetail name={"China"} number={"0000000"}/>
                <CountryDetail name={"China"} number={"0000000"}/>
                <CountryDetail name={"China"} number={"0000000"}/>
                <CountryDetail name={"China"} number={"0000000"}/>
                <CountryDetail name={"China"} number={"0000000"}/>
                <CountryDetail name={"China"} number={"0000000"}/>
                <CountryDetail name={"China"} number={"0000000"}/>
                <CountryDetail name={"China"} number={"0000000"}/>
                <CountryDetail name={"China"} number={"0000000"}/>
            </Flex>
        </Flex>
    );
}

export default CountryList;