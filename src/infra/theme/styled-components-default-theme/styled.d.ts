import 'styled-components';
import {darkTheme} from '../dark-theme';

declare module 'styled-components' {
  type CustomTheme = typeof darkTheme;

  export interface DefaultTheme extends CustomTheme {}
}
