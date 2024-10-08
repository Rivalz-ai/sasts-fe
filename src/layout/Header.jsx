import {Box, chakra, Flex, shouldForwardProp} from '@chakra-ui/react';
import AppWrapper from '../components/AppWrapper';
import Logo from '../components/Logo/index.jsx';
import {isValidMotionProp, motion} from "framer-motion";
import MenuImage from '../assets/menu.svg';
import Socials from "../components/Socials.jsx";
import Menu from "../components/Menu.jsx";
import useConnection from "../utils/zustand.config.js";
import {BORDER_STYLE} from "../themes/index.js";
import Container from "../components/Container.jsx";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Header() {
    const {openMenu, setOpenMenu} = useConnection();

    return (
        <AppWrapper alignItems="center" justifyContent="center" flexDirection="row">
            <Flex
                w="full"
                h="76px"
                alignItems="flex-end"
                justifyContent="space-between"
                px="20px"
                position="relative"
            >
                <Logo/>
                <Container
                    w={{ base: '65%', lg: '1128px' }}
                    px={'unset'}
                    minH="55px"
                    h="56px"
                    borderBottom={BORDER_STYLE}
                    borderTop={BORDER_STYLE}
                    bgColor="#071009"
                    display="flex"
                    flexDir="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Box flex="1"></Box>
                    <Socials showBorder />
                </Container>
                <Flex
                    w="56px"
                    h="56px"
                    borderRadius="0px 4px 0px 0px"
                    cursor="pointer"
                    border="1px solid #1C4327"
                    justifyContent="center"
                    alignItems="center"
                    position="relative"
                    onClick={() => {
                        setOpenMenu(!openMenu);
                    }}
                >
                    <Flex
                        w="24px"
                        h="24px"
                        bgImage={MenuImage}
                        bgRepeat="no-repeat"
                        bgSize="contain"
                        bgPos="center"
                    />
                    <ChakraBox
                        w="2px"
                        h="2px"
                        bgColor="#F9C981"
                        borderRadius="full"
                        position="absolute"
                        top="10px"
                        right="10px"
                        animate={{scale: [1, 2, 0, 2, 1]}}
                        transition={{
                            duration: 1,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'loop',
                        }}
                    />
                </Flex>
            </Flex>
            {openMenu && <Menu />}
        </AppWrapper>
    );
}
