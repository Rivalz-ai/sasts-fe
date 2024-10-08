import {Flex} from "@chakra-ui/react";
import RowTitle from "../RowTitle.jsx";
import ButtonCustom from "../ButtonCustom.jsx";

const ChartHeader = ({ title }) => {
    return (
        <Flex
            justifyContent={"space-between"}
            w={"full"}
            py={5}
        >
            <Flex>
                <RowTitle
                    title={title}
                    imgProps={{ w: { base: '30px', lg: 100 } }}
                />
            </Flex>
            <Flex
                gap={2}
                pr={5}
            >
                <ButtonCustom title={"DAY"} selected={true} />
                <ButtonCustom title={"WEEK"} />
                <ButtonCustom title={"MONTH"} />
            </Flex>
        </Flex>
    )
}

export default ChartHeader;