import { classNames } from 'shared/lib/classNames/classNames'
import React from 'react'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import SunIcon from 'shared/assets/icons/sun-svgrepo-com.svg'
import MoonIcon from 'shared/assets/icons/moon-svgrepo-com.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, changeTheme } = useTheme()

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={changeTheme}
        >
            {theme === Theme.DARK ? (
                <SunIcon width={36} height={36} />
            ) : (
                <MoonIcon width={36} height={36} />
            )}
        </Button>
    )
}
