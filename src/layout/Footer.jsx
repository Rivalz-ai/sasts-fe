import AppWrapper from '../components/AppWrapper';
import Container from '../components/Container';
import { Flex, Image, Spacer, chakra } from '@chakra-ui/react';
import { Text500 } from '../components/Text/index.jsx';
import {BORDER_STYLE} from "../themes/index.js";
import LogoFooter from '/assets/logo-footer.svg';
import {DISCORD_URL, RIVALZ_LANDING_PAGE_URL, TELEGRAM_URL, X_URL} from "../utils/index.js";

const footer_menu = [
  { lable: 'About', link: 'https://docs.rivalz.ai/' },
  { lable: 'DOCUMENTATION', link: 'https://docs.rivalz.ai/' },
  { lable: 'THE MINEZ', link: `${RIVALZ_LANDING_PAGE_URL}/dashboard` },
  { lable: 'REFERRALS', link: `${RIVALZ_LANDING_PAGE_URL}/referral-program` },
  { lable: 'SOCIALS', link: `${RIVALZ_LANDING_PAGE_URL}/socials` },
  { lable: 'FRAGMENTZ', link: `${RIVALZ_LANDING_PAGE_URL}/fragmentz` },
];

export default function Footer() {
  return (
    <AppWrapper justifyContent="center" alignItems="center">
      <Container
        px={{ base: '20px', lg: 'unset' }}
        borderTop={{ base: 'unset', lg: BORDER_STYLE }}
        flexDir={{ base: 'column', lg: 'row' }}
        bg="#071009"
        minH="168px"
      >
        <Flex flex={1}>
          <Flex
            p="20px"
            flex={1}
            flexDir="column"
            borderTop={{ base: BORDER_STYLE, lg: 'unset' }}
          >
            <a href="#">
              <Image src={LogoFooter} alt="Rivalz" w="198px" />
            </a>
            <Spacer />
            <Text500
              fontSize="12px"
              color="#337D48"
              display={{ base: 'none', lg: 'flex' }}
            >
              {new Date().getFullYear()}
            </Text500>
            <Text500
              fontSize="12px"
              color="#337D48"
              mt="5px"
              display={{ base: 'none', lg: 'flex' }}
            >
              Rivalz LLC
            </Text500>
          </Flex>
        </Flex>
        <Flex flex={1}>
          <Flex flex={1} alignItems="flex-end" p="20px">
            <Text500 fontSize="12px" color="#337D48" lineHeight="20px">
              The first AI Intel Layer powered by{' '}
              <chakra.span color="#69FF93">@dymension</chakra.span> with{' '}
              <chakra.span color="#69FF93">@CelestiaOrg</chakra.span> DA
              underneath
            </Text500>
          </Flex>
        </Flex>
        <Flex
          flex={1}
          alignItems="flex-end"
          display={{ base: 'none', lg: 'flex' }}
        >
          <Flex flex={1} p="20px" flexDir="column" as="ul">
            {footer_menu.map((item) => (
              <Flex as="li" key={JSON.stringify(item)} py="4px">
                <a href={item.link}>
                  <Text500
                    fontSize="12px"
                    color="#337D48"
                    lineHeight="20px"
                    textTransform="uppercase"
                  >
                    {item.lable}
                  </Text500>
                </a>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex flex={1}>
          <Flex
            flex={1}
            p="20px"
            justifyContent="flex-end"
            flexDir="column"
            display={{ base: 'none', lg: 'flex' }}
          >
            <a href={X_URL} target="_blank">
              <Text500
                fontSize="12px"
                color="#337D48"
                lineHeight="20px"
                py="5px"
              >
                X
              </Text500>
            </a>
            <a href={DISCORD_URL} target="_blank">
              <Text500
                fontSize="12px"
                color="#337D48"
                lineHeight="20px"
                py="5px"
              >
                DISCORD
              </Text500>
            </a>
            <a href={TELEGRAM_URL} target="_blank">
              <Text500
                fontSize="12px"
                color="#337D48"
                lineHeight="20px"
                py="5px"
              >
                TELEGRAM
              </Text500>
            </a>
          </Flex>

          <Flex
            flex={1}
            p="20px"
            display={{ base: 'flex', lg: 'none' }}
            alignItems="center"
            gap="5px"
          >
            <Text500 fontSize="12px" color="#337D48">
              {new Date().getFullYear()}
            </Text500>
            <Text500 fontSize="12px" color="#337D48">
              Rivalz LLC
            </Text500>
          </Flex>
        </Flex>
      </Container>
    </AppWrapper>
  );
}
