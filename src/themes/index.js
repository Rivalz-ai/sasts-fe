import { extendTheme } from '@chakra-ui/react';

export const MAX_CONTENT_WIDTH = 1280;
export const BORDER_STYLE = '1px solid #1C4327';
export const BORDER_DASHED_STYLE = '1px dashed #1C4327';

export const fonts = {
  CeraPro: 'Cera Pro',
};

export const colors = {
  primaryBlue: '#13FCE4',
  blue10: '#13FCE41A10',
  whiteFd: '#FDFDFF',
  black06: '#060606',
  bg: '#060106',
};

const Text = {
  variants: {
    'with-400': {
      fontSize: '14px',
      fontWeight: '400',
      color: 'white',
    },
  },
};

export const TextVariants = {
  WITH_400: 'with-400',
};

const components = {
  Text,
};

const theme = extendTheme({
  fonts: {},
  components,
});

export default theme;
