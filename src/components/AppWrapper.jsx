import { Flex } from '@chakra-ui/react';
import {MAX_CONTENT_WIDTH} from "../themes/index.js";



export default function AppWrapper({ wrapStyle, children, ...props }) {
  return (
    <Flex
      w="full"
      justifyContent="flex-start"
      flexDirection="column"
      alignItems="center"
      {...wrapStyle}
    >
      <Flex
        w="full"
        maxW={{ base: '360px', lg: `${MAX_CONTENT_WIDTH}px` }}
        flexDirection="column"
        {...props}
      >
        {children}
      </Flex>
    </Flex>
  );
}
