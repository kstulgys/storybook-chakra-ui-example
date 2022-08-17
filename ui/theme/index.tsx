import { extendTheme } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  radii: {
    none: '0',
    0: '0',
    4: '0.4rem',
    8: '0.8rem',
    12: '1.2rem',
    20: '2.rem',
    full: '9999px',
    // sm: '0.125rem',
    // base: '0.25rem',
    // md: '0.375rem',
    // lg: '0.5rem',
    // xl: '0.75rem',
    // '2xl': '1rem',
    // '3xl': '1.5rem',
  },

  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: '24px',
        rounded: 4,
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        large: {
          h: '56px',
          px: '16px',
        },
        medium: {
          h: '54px',
          px: '16px',
        },
      },
      // 3. We can add a new visual variant
      variants: {
        // can use StyleFunctionProps i.e. for dark mode
        // somevariant: (props: StyleFunctionProps) => ({}),
        primary: {
          bg: '#006443',
          color: 'white',
          _hover: {
            bg: '#338369',
          },
        },
        secondary: {
          bg: 'white',
          color: '#006443',
          _hover: {
            bg: '#E7F4F4',
          },
          borderColor: '#006443',
          borderWidth: '1px',
        },
        tertiary: {
          bg: '#D0E9E9',
          color: '#006443',
          _hover: {
            bg: '#E7F4F4',
          },
        },
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: 'large', // default is md
        variant: 'primary', // default is solid
        colorScheme: 'green', // default is gray
      },
    },
  },
});

export default theme;
