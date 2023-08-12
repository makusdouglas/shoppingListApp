import {ThemeProvider} from 'styled-components/native';
import customTheme from '../dark-theme';
import React from 'react';
export type ThemeSwitcher = {
  theme: 'dark' | 'light';
};
export const ThemeSwitcher: React.FC<
  React.PropsWithChildren<ThemeSwitcher>
> = ({children, theme}) => {
  return (
    <ThemeProvider theme={theme === 'dark' ? customTheme : customTheme}>
      {children}
    </ThemeProvider>
  );
};
