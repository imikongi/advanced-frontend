import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from '../lib/ThemeContext'
import { useContext } from 'react'

interface UseThemeR {
    changeTheme: () => void
    theme: Theme
}

export function useTheme(): UseThemeR {
    const { theme, setTheme } = useContext(ThemeContext)

    const changeTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme,
        changeTheme,
    }
}
