import {createContext} from "react";
//enum for themes
export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}
//context interface (initially empty)
export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void
}
//creating context with empty values
export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'