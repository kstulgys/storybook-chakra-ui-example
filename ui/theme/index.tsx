import { extendTheme } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const radii = {
  none: '0',
  0: '0',
  4: '0.4rem',
  8: '0.8rem',
  12: '1.2rem',
  20: '2.rem',
  full: '9999px',
};

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};

const colors = {
  'primary.100': '#006443',
  'primary.80': '#338369',
  'sea.20': '#E7F4F4',
  'sea.40': '#D0E9E9',
};

const components = {
  Button: {
    // 1. We can update the base styles
    baseStyle: {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '24px',
      rounded: 4,
      _pressed: {
        borderColor: 'primary.100',
        borderWidth: '2px',
      },
      _focus: {
        shadow: 'outline',
      },
      _disabled: {
        color: '#6E6E6E',
        bg: '#EBEBEB',
      },
    },
    // 2. We can add a new button size or extend existing
    sizes: {
      large: {
        h: '56px',
        px: '16px',
      },
      medium: {
        h: '44px',
        px: '16px',
      },
    },
    // 3. We can add a new visual variant
    variants: {
      // can use StyleFunctionProps i.e. for dark mode
      // somevariant: (props: StyleFunctionProps) => ({}),
      primary: {
        bg: 'primary.100',
        color: 'white',
        _hover: {
          bg: 'primary.80',
        },
      },
      secondary: {
        bg: 'white',
        color: 'primary.100',
        _hover: {
          bg: 'sea.20',
        },
        borderColor: 'primary.100',
        borderWidth: '1px',
      },
      tertiary: {
        bg: 'sea.40',
        color: 'primary.100',
        _hover: {
          bg: 'sea.20',
        },
      },
    },
    // 6. We can overwrite defaultProps
    defaultProps: {
      size: 'large', // default is md
      variant: 'primary', // default is solid
    },
  },
};

const theme = extendTheme({
  radii,
  breakpoints,
  colors,
  components,
  shadows: {
    outline: '0px 0px 0px 1px #FFFFFF, 0px 0px 0px 4px #0071C2',
  },
});

export default theme;
