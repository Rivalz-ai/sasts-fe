import {Skeleton, Stack} from "@chakra-ui/react";
import Container from "./Container.jsx";

const Loading = () => {
    return (
        <Container>
            <Stack>
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
            </Stack>
        </Container>
    )
}
export default Loading;