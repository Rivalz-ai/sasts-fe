import { Flex, Image } from '@chakra-ui/react';
import {Text14Px400} from "./Text/index.jsx";
import ArrowRight from '../assets/arrow-right.svg';

const BreadCrumb = ({ data }) => {
  const condition = data.length - 1;
  return (
    <Flex w="full" gap="4px">
      {data.map((item, index) => (
        <Flex key={index} alignItems="center" gap="4px" data-group="hover">
          {item.icon && <Image src={item.icon} alt="icon" />}
          <a href={item.href}>
            <Text14Px400
              color="#337D48"
              _hover={{ color: '#69FF93', transition: '' }}
            >
              {item.name}
            </Text14Px400>
          </a>
          {index < condition && (
            <Image src={ArrowRight} alt="icon" />
          )}
        </Flex>
      ))}
    </Flex>
  );
};

export default BreadCrumb;
