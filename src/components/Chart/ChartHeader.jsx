import {Flex} from "@chakra-ui/react";
import RowTitle from "../RowTitle.jsx";
import ButtonCustom from "../ButtonCustom.jsx";
import useConnection from "../../utils/zustand.config.js";

const ChartHeader = ({ title }) => {
    const {setChartType, chartType} = useConnection();

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
                <ButtonCustom
                    title={"DAY"}
                    selected={chartType === "DAY"}
                    onClick={() => setChartType("DAY")}
                />
                <ButtonCustom
                    title={"WEEK"}
                    selected={chartType === "WEEK"}
                    onClick={() => setChartType("WEEK")}
                />
                <ButtonCustom
                    title={"MONTH"}
                    selected={chartType === "MONTH"}
                    onClick={() => setChartType("MONTH")}
                />
            </Flex>
        </Flex>
    )
}

export default ChartHeader;