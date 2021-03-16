import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native'
import { lightTheme, darkTheme } from './theme'

type Props = {
  darkMode?: boolean
}

export const ThemeProvider: React.FC<Props> = ({
  children,
  darkMode = false,
}) => {
  const appTheme = darkMode ? darkTheme : lightTheme
  return (
    <StyledThemeProvider theme={{ ...appTheme, darkMode }}>
      {children}
    </StyledThemeProvider>
  )
}
