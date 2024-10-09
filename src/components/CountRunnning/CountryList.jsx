import {Flex} from "@chakra-ui/react";
import {Text14Px400} from "../Text/index.jsx";
import CountryDetail from "./CountryDetail.jsx";
import {useEffect, useState} from "react";
import {getName} from "country-list";

const CountryList = ({data}) => {
    const [processedData, setProcessedData] = useState([]);

    useEffect(() => {
        if (!data) return;
        const countryData = [];
        const sortedData = Object.entries(data)
            .sort(([, valueA], [, valueB]) => valueB - valueA)
            .reduce((acc, [key, value]) => {
                acc[key] = value;
                return acc;
            }, {});
        for (const key in sortedData) {
            countryData.push({
                id: key,
                country: getName(key),
                connection: sortedData[key]
            })
        }
        setProcessedData(countryData);
    }, [data]);

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
                {processedData.map((country) => (
                    <CountryDetail
                        key={country.id}
                        name={country.country}
                        number={country.connection.toLocaleString()}
                    />
                ))}
            </Flex>
        </Flex>
    );
}

export default CountryList;