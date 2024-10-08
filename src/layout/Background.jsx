import { Flex } from '@chakra-ui/react';
import {MAX_CONTENT_WIDTH} from "../themes/index.js";
import BackgroundBodyMd from '../assets/body-mb.svg';
import BackgroundBody from '../assets/body.svg';

export default function Background({ children, ...props }) {
  return (
    <Flex w="full" bg="#071009">
      <Flex
        flexDir="column"
        w="full"
        maxW={MAX_CONTENT_WIDTH}
        mx="auto"
        minH="100vh"
        bgImage={{ base: BackgroundBodyMd, lg: BackgroundBody }}
        bgRepeat="repeat-y"
        bgPosition="center"
        {...props}
      >
        {children}
      </Flex>
    </Flex>
  );
}
