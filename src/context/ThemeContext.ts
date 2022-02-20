import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface IThemeContextProps {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({
  theme: Theme.LIGHT,
  changeTheme: () => {},
});
