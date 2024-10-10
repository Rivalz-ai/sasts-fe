import {Flex, Image, Stack} from '@chakra-ui/react';
import XIcon from '/assets/x.svg';
import DiscordIcon from '/assets/discord.svg';
import TelegramIcon from '/assets/telegram.svg';
import {DISCORD_URL, TELEGRAM_URL, X_URL} from "../utils/index.js";
import {BORDER_STYLE} from "../themes/index.js";

export default function Socials({showBorder, ...props}) {
    return (
        <Stack
            w="fit-content"
            zIndex={10}
            gap="unset"
            direction={{ base: 'column', lg: 'row' }}
            display={{ base: 'none', lg: 'flex' }}
            {...props}
        >
            <Flex
                w="56px"
                h="56px"
                justifyContent="center"
                alignItems="center"
                borderLeft={showBorder ? BORDER_STYLE : 'unset'}
                borderRight={showBorder ? BORDER_STYLE : 'unset'}
            >
                <a href={X_URL} target="_blank">
                    <Image src={XIcon} alt="Twitter"/>
                </a>
            </Flex>
            <Flex
                w="56px"
                h="56px"
                justifyContent="center"
                alignItems="center"
                borderRight={showBorder ? BORDER_STYLE : 'unset'}
            >
                <a href={DISCORD_URL} target="_blank">
                    <Image src={DiscordIcon} alt="Discord"/>
                </a>
            </Flex>
            <Flex
                w="56px"
                h="56px"
                justifyContent="center"
                alignItems="center"
            >
                <a href={TELEGRAM_URL} target="_blank">
                    <Image src={TelegramIcon} alt="Twitter"/>
                </a>
            </Flex>
        </Stack>
    );
}
