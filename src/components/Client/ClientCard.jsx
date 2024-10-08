import {BORDER_STYLE} from "../../themes/index.js";
import {Text14Px400, Text900} from "../Text/index.jsx";
import {Flex} from "@chakra-ui/react";

const ClientCard = ({title, value}) => {
    return (
        <Flex
            flex={1}
            borderRadius="10px"
            border={BORDER_STYLE}
            bg="#071009"
            p={{ base: '16px', lg: '20px' }}
            gap={{ base: '20px', lg: '40px' }}
            alignItems="flex-start"
            display={'block'}
        >
            <Text14Px400
                color="#69FF93"
                fontSize={{ base: '12px', lg: '14px' }}
            >
                {title}
            </Text14Px400>
            <Text900
                fontSize="18px"
                color="#F6F4FA"
                lineHeight="18px"
                letterSpacing="unset"
            >
                {value}
            </Text900>
        </Flex>
    )
}

export default ClientCard;