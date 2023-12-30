import { createContext } from 'react'
// Enum for themes
export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}
// Context interface (initially empty)
export interface ThemeContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}
// Creating context with empty values
export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
