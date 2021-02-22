import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native'
import { lightTheme, darkTheme } from './theme'

const fakeConfig = { isDarkMode: false }

export const ThemeProvider: React.FC = ({ children }) => {
  const { isDarkMode } = fakeConfig
  const appTheme = { colors: isDarkMode ? darkTheme : lightTheme }

  return <StyledThemeProvider theme={appTheme}>{children}</StyledThemeProvider>
}
