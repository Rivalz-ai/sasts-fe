import { Text } from '@chakra-ui/react';

export const Text900 = ({ isGreen = true, children, ...props }) => {
  return (
    <Text
      color={isGreen ? '#69FF93' : '#F6F4FA'}
      fontSize="150px"
      fontWeight={900}
      fontStyle="normal"
      letterSpacing="4.5px"
      lineHeight="100%"
      {...props}
    >
      {children}
    </Text>
  );
};

export const Text900Stroke = ({ children, ...props }) => {
  return (
    <Text
      color="#071009"
      fontSize="150px"
      fontWeight={900}
      fontStyle="normal"
      letterSpacing="4.5px"
      lineHeight="100%"
      style={{
        WebkitTextStrokeWidth: 1,
        WebkitTextStrokeColor: '#69FF93',
      }}
      {...props}
    >
      {children}
    </Text>
  );
};

export const Text500 = ({ isGreen = true, children, ...props }) => {
  return (
    <Text
      color={isGreen ? '#69FF93' : '#F6F4FA'}
      fontSize="14px"
      fontWeight={500}
      fontStyle="normal"
      letterSpacing="0.28px"
      lineHeight="100%"
      {...props}
    >
      {children}
    </Text>
  );
};

export const Text14Px400 = ({ isGreen, children, ...props }) => {
  return (
    <Text
      color={isGreen ? '#69FF93' : '#F6F4FA'}
      fontSize="14px"
      fontWeight={400}
      fontStyle="normal"
      lineHeight="22px"
      {...props}
    >
      {children}
    </Text>
  );
};
