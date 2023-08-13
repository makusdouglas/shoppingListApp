import {ThemeProvider} from 'styled-components/native';
import {darkTheme} from '../dark-theme';
import React from 'react';
export type ThemeSwitcher = {
  theme: 'dark' | 'light';
};
export const ThemeSwitcher: React.FC<
  React.PropsWithChildren<ThemeSwitcher>
> = ({children, theme}) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};
