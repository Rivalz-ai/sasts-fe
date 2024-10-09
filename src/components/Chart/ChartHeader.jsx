import {Flex} from "@chakra-ui/react";
import RowTitle from "../RowTitle.jsx";
import ButtonCustom from "../ButtonCustom.jsx";

const ChartHeader = ({ title }) => {
    return (
        <Flex
            justifyContent={"space-between"}
            w={"full"}
            py={5}
            flexDirection={{ base: 'column', lg: 'row' }}
            gap={{ base: 5, lg: 0 }}
        >
            <Flex>
                <RowTitle
                    title={title}
                    imgProps={{ w: { base: '30px', lg: 100 } }}
                />
            </Flex>
            <Flex
                gap={2}
                pr={{ base: 0, lg: 5 }}
            >
                <ButtonCustom title={"DAY"} selected={true} />
                <ButtonCustom title={"WEEK"} />
                <ButtonCustom title={"MONTH"} />
            </Flex>
        </Flex>
    )
}

export default ChartHeader;