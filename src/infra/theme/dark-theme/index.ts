import {hexToRgba} from '@/utils/colors';

export const darkTheme = {
  COLORS: {
    PRIMARY: '#48F797',
    BACKGROUND: '#0C0F0A',
    BACKGROUND_SURFACE: '#171916',
    BACKGROUND_000: 'rgba(28,28,28,0)',
    BACKGROUND_400: 'rgba(28,28,28,0.4)',
    BACKGROUND_100: 'rgba(28,28,28,1)',
    BACKGROUND_DARKER: '#000',
    BACKGROUND_DARKER_200: 'rgba(0,0,0,0.2)',
    BACKGROUND_DARKER_400: 'rgba(0,0,0,0.4)',
    BACKGROUND_DARKER_500: 'rgba(0,0,0,0.5)',
    BACKGROUND_DARKER_800: 'rgba(0, 0, 0, 0.8)',
    HIGHLIGHT: '#D81159',
    TEXT: {
      PRIMARY: '#FFF',
      PRIMARY_700: hexToRgba('#FFF', 70),
      PRIMARY_800: hexToRgba('#FFF', 80),
      PRIMARY_900: hexToRgba('#FFF', 90),
      INACTIVE: '#CCCCCC',
      INACTIVE_100: '#949494',
      INACTIVE_500: '#DDDDDD',
    },
    CARDS: {
      TEXT_COLOR: '#FFF',
      SUBTITLE_COLOR: '#808080',
      NEGATIVE_TEXT_COLOR: '#000000',
      HELPER_TEXT: '#5F5F5F',
      PRIMARY_BACKGROUND: '#0F0F0F',
      PRIMARY_BACKGROUND_200: 'rgba(15,15,15,0.2)',
      NEGATIVE_BACKGROUND: '#FFF',
      BORDER: '#DADADA',
      PROMOTION_AVAILABLE: '#000000',
      PROMOTION_PROCESSING: '#FFDA44',
      PROMOTION_UNAVAILABLE: '#6DA544',
    },
    GRADIENT: {
      BACKGROUND_PRIMARY: '#6DA544',
      BACKGROUND_SECONDARY: '#171717',
    },
    FIELDS: {
      PRIMARY_BACKGROUND: '#000',
      NEGATIVE_BACKGROUND: 'transparent',
      CONTRAST_BACKGROUND: '#434343',
      BORDER_PRIMARY: '#000',
      TEXT_COLOR: '#FFF',
      NEGATIVE_TEXT_COLOR: '#000',
      BORDER_ERROR: '#C53F42',
      BORDER_WARNING: '#D09120',
      BORDER_SUCCESS: '#78C939',
    },
    CTA: {
      TRANSPARENT: 'transparent',
      PRIMARY: '#000',
      SECONDARY: '#fff',
      SUCCESS: '#4F9D43',
      DISABLED: '#C4C4C4',
      TEXT_PRIMARY: '#fff',
      TEXT_SECONDARY: '#000',
      TEXT_SUCCESS: '#fff',
      TEXT_DISABLED: '#fff',
    },
  },
  fontFamily: {
    EFFRA_300: 'Effra-Light',
    EFFRA_400: 'Effra-Regular',
    EFFRA_500: 'Effra-Medium',
    EFFRA_700: 'Effra-Bold',
    EFFRA_800: 'Effra-Heavy',
    LEMON_300: 'LEMONMILK-Light',
    LEMON_400: 'LEMONMILK-Regular',
    LEMON_500: 'LEMONMILK-Medium',
    LEMON_700: 'LEMONMILK-Bold',
  },

  fontSizes: {
    title: {
      sm: 26,
      lg: 48,
    },
    subtitle: {
      sm: 18,
      lg: 40,
    },
    subtitle02: {
      sm: 16,
      lg: 24,
    },
    subtitle03: {
      sm: 12,
      lg: 16,
    },
    miniTitle: {
      sm: 10,
      lg: 12,
    },
    helpText: {
      sm: 16,
      lg: 20,
    },
    text: {
      sm: 13,
      lg: 16,
    },
  },
};
