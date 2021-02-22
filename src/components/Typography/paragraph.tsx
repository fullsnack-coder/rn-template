import React from 'react'
import { TextProps } from 'react-native'
import styled from 'styled-components/native'
import { fontSize, FontSizeProps } from 'styled-system'

type Props = FontSizeProps & Omit<TextProps, 'style' | 'selectionColor'>

const P = styled.Text`
  ${fontSize}
`

const Paragraph: React.FC<Props> = ({ children, ...rest }) => {
  return <P {...rest}>{children}</P>
}

export default Paragraph
