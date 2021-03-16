import React from 'react'
import { useTheme, DefaultTheme } from 'styled-components/native'
import { render } from '@testing-library/react-native'

import Box from '../../components/Box'
import Typography from '../../components/Typography'
import { ThemeProvider } from '../themeProvider'
import { darkTheme } from '../theme'

const TestComponent = () => {
  const theme: DefaultTheme = useTheme()
  return (
    <Box.View>
      {theme && (
        <Typography.P testID="available-theme">
          {theme.colors.primary}
        </Typography.P>
      )}
      <Typography.P testID="darkMode-prop">{`${theme.darkMode}`}</Typography.P>
    </Box.View>
  )
}

describe('themeProvider', () => {
  it('pass theme correctly', () => {
    const { getByTestId, getByText } = render(
      <ThemeProvider darkMode={true}>
        <TestComponent />
      </ThemeProvider>,
    )
    expect(getByTestId('available-theme')).toBeDefined()
    expect(getByText(darkTheme.colors.primary)).toBeDefined()
    expect(getByTestId('darkMode-prop').children[0]).toBe('true')
  })

  it('default Props', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    )
    expect(getByTestId('darkMode-prop').children[0]).toBe('false')
  })
})
