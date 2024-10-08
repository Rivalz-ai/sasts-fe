import {HStack, Image} from '@chakra-ui/react';
import {Text14Px400} from "./Text/index.jsx";
import LineImg from '../assets/line.svg';
import ShapeSvg from '../assets/shape.svg';

export default function RowTitle({
  title,
  imgProps,
  textProps,
  ...props
}) {
  return (
    <HStack alignItems="center" gap="20px" {...props}>
      <Image src={ShapeSvg} alt="shape" w="4px" h="4px" />
      <Text14Px400 color="#69FF93" textTransform="uppercase" {...textProps}>
        {title}
      </Text14Px400>
      <Image src={LineImg} alt="line" w="70px" {...imgProps} />
    </HStack>
  );
}
