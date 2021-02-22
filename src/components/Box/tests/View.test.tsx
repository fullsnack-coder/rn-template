import React from 'react'
import { render } from '@testing-library/react-native'
import View from '../View'

describe('View', () => {
  it('render without crashing', () => {
    const { getByTestId } = render(<View testID="test-view" />)
    expect(getByTestId('test-view')).toBeDefined()
  })
})
