import { Flex } from '@chakra-ui/react';

export default function Container({ children, ...props }) {
  return (
    <Flex
      minH="100px"
      w={{ base: 'full', xl: '1128px' }}
      zIndex={1}
      flexDir="column"
      px="20px"
      {...props}
    >
      {children}
    </Flex>
  );
}
