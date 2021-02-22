import React from 'react'
import { useTheme } from 'styled-components/native'
import { render } from '@testing-library/react-native'

import Box from '../../components/Box'
import Typography from '../../components/Typography'
import { ThemeProvider } from '../themeProvider'

const TestComponent = () => {
  const theme = useTheme()
  return (
    <Box.View>
      {theme && <Typography.P testID="available-theme">Test text</Typography.P>}
    </Box.View>
  )
}

describe('themeProvider', () => {
  it('pass theme correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    )
    expect(getByTestId('available-theme')).toBeDefined()
  })
})
