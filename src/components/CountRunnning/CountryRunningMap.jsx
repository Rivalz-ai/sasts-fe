import {Flex, Image} from "@chakra-ui/react";
import MapImage from "../../assets/map.svg"

const CountryRunningMap = () => {
    return (
        <Flex
            p={5}
            flex={2.87}
            borderRight={{ base: 'none', lg: '1px solid #1C4327' }}
        >
            <Image src={MapImage} alt="map" />
        </Flex>
    )
}

export default CountryRunningMap;