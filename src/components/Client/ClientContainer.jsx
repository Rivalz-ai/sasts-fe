import Container from "../Container.jsx";
import ClientCard from "./ClientCard.jsx";
import {Flex} from "@chakra-ui/react";

const ClientContainer = () => {
    return (
        <Container>
            <Flex
                flexDirection={{ base: 'column', lg: 'row' }}
                gap={{ base: '20px', lg: '40px' }}
                px={{ base: '20px', lg: '0' }}
            >
                <ClientCard title={"rCLIENTS ACTIVE"} value={0} />
                <ClientCard title={"SPACE AVAILABLE"} value={0} />
                <ClientCard title={"FLOPS AVAILABLE"} value={0} />
                <ClientCard title={"ALL VALIDATED rCLIENTS"} value={0} />
            </Flex>
        </Container>
    )
}

export default ClientContainer;