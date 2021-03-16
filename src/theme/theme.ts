import { DefaultTheme } from 'styled-components'

const palette = {
  'white-100': '#f5f5f5',
  'gray-darken': '#888888',
}

export const lightTheme: DefaultTheme = {
  colors: {
    primary: palette['white-100'],
  },
}

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  colors: {
    primary: palette['gray-darken'],
  },
}
