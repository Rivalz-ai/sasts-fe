import {Text14Px400} from "../Text/index.jsx";
import {Flex} from "@chakra-ui/react";

const CountryDetail = ({name, number}) => {
    return(
        <Flex
            justifyContent={"space-between"}
            display={"flex"}
            p={3}
        >
            <Text14Px400
                color="#fff"
                fontSize={{ base: '12px', lg: '14px' }}
            >
                {name}
            </Text14Px400>
            <Text14Px400
                color="#fff"
                fontSize={{ base: '12px', lg: '14px' }}
            >
                {number}
            </Text14Px400>
        </Flex>
    )
}

export default CountryDetail;