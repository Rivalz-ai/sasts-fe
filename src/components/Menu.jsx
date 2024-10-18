import {
  chakra,
  Flex,
  Image,
  shouldForwardProp,
  Spacer,
} from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import RowTitle from "./RowTitle.jsx";
import {Text14Px400, Text900} from "./Text/index.jsx";
import ShapeHoverImg from '/assets/shape-hover.svg';
import ArrowRight from '/assets/arrowright.svg';
import CloseIcon from '/assets/close.svg';
import ArrowDown from '/assets/arrowdown.svg';
import CardPng from '/assets/card-bg.png';
import {BORDER_STYLE} from "../themes/index.js";
import useConnection from "../utils/zustand.config.js";
import {RIVALZ_LANDING_PAGE_URL} from "../utils/index.js";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const menus = [
  {
    lable: 'HOME',
    url: `${RIVALZ_LANDING_PAGE_URL}`,
    img: '01',
  },
  {
    lable: 'THE MINEZ',
    url: `${RIVALZ_LANDING_PAGE_URL}/dashboard`,
    img: '02',
  },
  {
    lable: 'Referrals',
    url: `${RIVALZ_LANDING_PAGE_URL}/referral-program`,
    img: '03',
  },
  {
    lable: 'SOCIALS',
    url: `${RIVALZ_LANDING_PAGE_URL}/socials`,
    img: '04',
  },
  {
    lable: 'FRAGMENTS',
    url: `${RIVALZ_LANDING_PAGE_URL}/fragmentz`,
    img: '05',
  },
  {
    lable: 'DOWNLOAD',
    url: `${RIVALZ_LANDING_PAGE_URL}/download`,
    img: '06',
  },
];

const transition = {
  type: 'spring',
  duration: 0.5,
  stiffness: 40,
  damping: 5,
  mass: 0.5,
};

export default function Menu() {
  const { setOpenMenu } = useConnection();

  const handleGoTo = (url) => {
    window.location.href = url;
  }

  return (
    <Flex
      backgroundColor="rgba(0, 0, 0, 0.5)"
      w="full"
      minH="150vh"
      position="absolute"
      zIndex={90}
      top={0}
      left={0}
    >
      <ChakraBox
        w={{ base: '95%', lg: '588px' }}
        position="absolute"
        right="250px"
        top="5px"
        zIndex={100}
        flexDir="row"
        border={BORDER_STYLE}
        borderRadius="10px"
        overflow="hidden"
        bgColor="#071009"
        as={motion.div}
        initial={{ opacity: 0, right: -500 }}
        animate={{ opacity: 1, right: 0 }}
        exit={{ opacity: 0, right: '-100%' }}
        transition={transition}
      >
        <Flex flex={1}>
          <Flex w="56px" borderRight={BORDER_STYLE}>
            <Flex
              w="56px"
              h="56px"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              onClick={() => setOpenMenu(false)}
            >
              <Flex
                w="24px"
                h="24px"
                bgRepeat="no-repeat"
                bgImage={CloseIcon}
                bgSize="contain"
                bgPos="center"
              />
            </Flex>
          </Flex>
          <Flex flexDir="column">
            <Flex
              w="full"
              h="100%"
              flexDir="column"
              p="20px"
              flexDirection="column"
            >
              <Flex
                borderRadius="10px"
                p="20px"
                background={`url(${CardPng}) lightgray 216.128px -50.562px / 65.931% 205.286% no-repeat`}
                onClick={() => handleGoTo(`${RIVALZ_LANDING_PAGE_URL}/dashboard`)}
                h="176px"
                bgColor="#071009"
                border={BORDER_STYLE}
                flexDir="column"
                cursor="pointer"
              >
                <Flex w="full">
                  <Flex
                    borderRadius="full"
                    justifyContent="center"
                    alignItems="center"
                    bgColor="#265C35"
                    p="4px 12px"
                    h="fit-content !important"
                    w="fit-content"
                    color="#69FF93"
                    fontWeight={500}
                    lineHeight="22px"
                    fontSize="14px"
                  >
                    Q3 - Q4 2024
                  </Flex>
                  <Spacer />
                  <Image src={ArrowRight} alt="arrowright" />
                </Flex>

                <Text900
                  textTransform="uppercase"
                  lineHeight="30px"
                  letterSpacing="0.9px"
                  fontSize="30px"
                  fontStyle="normal"
                  color="#F6F4FA"
                  mt="20px"
                  mb="12px"
                >
                  TESTNET
                </Text900>
                <Text14Px400
                  color="rgba(246, 244, 250, 0.64)"
                  lineHeight="22px"
                  maxW="132px"
                >
                  Participate early for future $RIZ rewards.
                </Text14Px400>
              </Flex>
              <Flex flex={1} mt="60px" alignItems="flex-start">
                <Flex pr="20px">
                  <RowTitle
                    title="MENU"
                    ml="-20px"
                    imgProps={{ w: { base: '30px', lg: 100 } }}
                  />
                </Flex>
                <Flex
                  flex={1}
                  flexDirection="column"
                  gap={{ base: '8px', lg: '12px' }}
                >
                  {menus.map(menu => {
                    return (
                      <Flex
                        key={menu.lable}
                        role="group"
                        gap="8px"
                        onClick={() => handleGoTo(menu.url)}
                      >
                        <Flex
                          fontSize={{ base: '24px', lg: '48px' }}
                          fontStyle="normal"
                          fontWeight={900}
                          lineHeight={{ base: '34px', lg: '48px' }}
                          textTransform="uppercase"
                          color={'#F6F4FA'}
                          cursor="pointer"
                          w="fit-content"
                          borderRadius="4px"
                          p={'8px'}
                          bgColor={'transparent'}
                          transition="all 0.5s linear"
                          _groupHover={{
                            color: '#071009',
                            bgColor: '#F6F4FA',
                          }}
                        >
                          {menu.lable}
                        </Flex>
                        <Flex flexDir="column" h="fit-content">
                          <Image
                            src={ShapeHoverImg}
                            alt="shape"
                            display={'none'}
                            _groupHover={{ display: 'block' }}
                          />
                          <Text14Px400
                            color={'#071009'}
                            fontWeight={500}
                            _groupHover={{color: '#F6F4FA'}}
                          >
                            {menu.img}
                          </Text14Px400>
                        </Flex>
                      </Flex>
                    );
                  })}
                </Flex>
              </Flex>
            </Flex>

            <Flex
              borderTop={BORDER_STYLE}
              h="56px"
              alignItems="center"
              w="full"
              px="20px"
              mt="150px"
            >
              <Flex>
                <Text14Px400 fontWeight={500} color="#49B267">
                  us-en
                </Text14Px400>
                <Image src={ArrowDown} alt="arrowdown" />
              </Flex>
              <Spacer />
              <Text14Px400 color="#49B267" fontWeight={500}>
                {new Date().getFullYear()}
              </Text14Px400>
            </Flex>
          </Flex>
        </Flex>
      </ChakraBox>
    </Flex>
  );
}
