import Container from "../Container.jsx";
import ClientCard from "./ClientCard.jsx";
import {Flex} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import numeral from "numeral";

numeral.register('format', 'largeNumber', {
    regexps: {
        format: /(,)/,
        unformat: /(,)/
    },
    format: function(value, format, roundingFunction) {
        var output = numeral._.numberToFormat(value, format, roundingFunction);
        return output.replace(/,/g, ',');
    },
    unformat: function(string) {
        return numeral._.stringToNumber(string.replace(/,/g, ''));
    }
});


const ClientContainer = ({data}) => {
    const [spaceAvailable, setSpaceAvailable] = useState("");
    const [flopsAvailable, setFlopsAvailable] = useState("");

    useEffect(() => {
        if (!data) return;
        calculateSpaceAvailable()
        calculateFlopsAvailable()
    }, [data]);

    const calculateSpaceAvailable = () => {
        const totalSpaceNodeV1 = data['activeNodeInfoV1'].map(node => node['totalStorageUsage']).reduce((acc, cur) => acc + cur, 0);
        const totalSpaceNodeV2 = data['activeNodeV2Info'].map(node => node['totalStorageUsage']).reduce((acc, cur) => acc + cur, 0);
        const totalSpace = (totalSpaceNodeV1 + totalSpaceNodeV2) / 1_000_000_000_000_000;
        const numeralFormatted = numeral(totalSpace).format('0,0[.]00 a');
        setSpaceAvailable(numeralFormatted);
    }

    const calculateFlopsAvailable = () => {
        const totalFlopsNodeV1 = data['activeNodeInfoV1'].map(node => node['teraFlop']).reduce((acc, cur) => acc + cur, 0);
        const totalFlopsNodeV2 = data['activeNodeV2Info'].map(node => node['teraFlop']).reduce((acc, cur) => acc + cur, 0);
        const totalFlops = (totalFlopsNodeV1 + totalFlopsNodeV2) / 1_000_000_000_000;
        const numeralFormatted = numeral(totalFlops).format('0,0[.]00 a');
        setFlopsAvailable(numeralFormatted);
    }

    return (
        <Container>
            <Flex
                flexDirection={{ base: 'column', lg: 'row' }}
                gap={{ base: '20px', lg: '40px' }}
                px={{ base: '20px', lg: '0' }}
            >
                <ClientCard
                    title={"rCLIENTS ACTIVE"}
                    value={(data.activeNodeV1 + data.activeNodeV2).toLocaleString()}
                />
                <ClientCard title={"SPACE AVAILABLE (YB)"} value={spaceAvailable} />
                <ClientCard title={"FLOPS AVAILABLE (YFLOPS)"} value={flopsAvailable} />
                <ClientCard
                    title={"ALL VALIDATED rCLIENTS"}
                    value={(data.totalNode + data.totalNodeV2).toLocaleString()}
                />
            </Flex>
        </Container>
    )
}

export default ClientContainer;