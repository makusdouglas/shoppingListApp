import 'styled-components';
import customTheme from '../dark-theme';

declare module 'styled-components' {
  type CustomTheme = typeof customTheme;

  export interface DefaultTheme extends CustomTheme {}
}
