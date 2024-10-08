import Container from "./Container.jsx";
import {Text900} from "./Text/index.jsx";
import BreadCrumb from "./BreadCrumb.jsx";

export default function HeaderPage({title, breadCrumb, titleProps}) {
  return (
    <Container
      gap="8px"
      mt={{ base: '10px', lg: '0px' }}
      minH="60px"
      pl={{ base: '40px', lg: '20px' }}
      mb={{ base: '10px', lg: '20px' }}
    >
      <BreadCrumb data={breadCrumb} />
      <Text900
        fontSize="30px"
        color="#F6F4FA"
        textTransform="uppercase"
        letterSpacing="0.9px"
        lineHeight="30px"
        {...titleProps}
      >
        {title}
      </Text900>
    </Container>
  );
}
