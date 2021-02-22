import React from 'react'
import styled from 'styled-components/native'
import { ViewProps } from 'react-native'
import {
  color,
  layout,
  size,
  flex,
  flexbox,
  ColorProps,
  LayoutProps,
  SizeProps,
  PaddingProps,
  FlexProps,
  FlexboxProps,
} from 'styled-system'

const BoxWrapper = styled.View`
  ${color}
  ${layout}
  ${size}
  ${flex}
  ${flexbox}
`

type Props = ColorProps &
  LayoutProps &
  SizeProps &
  PaddingProps &
  FlexProps &
  FlexboxProps &
  Omit<ViewProps, 'style'>

const View: React.FC<Props> = ({ children, ...rest }) => (
  <BoxWrapper {...rest}>{children}</BoxWrapper>
)

export default View
