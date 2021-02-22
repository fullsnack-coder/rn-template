import React from 'react'
import styled from 'styled-components/native'
import {
  textColor,
  textAlign,
  fontSize,
  TextColorProps,
  TextAlignProps,
  FontSizeProps,
  FontWeightProps,
  fontWeight,
} from 'styled-system'
import { TextProps } from 'react-native'

type HeadingVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7'

type Props = TextColorProps &
  TextAlignProps &
  FontWeightProps &
  Omit<TextProps, 'style' | 'selectionColor'> & {
    as?: HeadingVariants
  }

const StyledHeading = styled.Text`
  ${textColor}
  ${textAlign}
  ${fontSize}
  ${fontWeight}
`
const headingSizes: { [k in HeadingVariants]: number } = {
  h1: 48,
  h2: 36,
  h3: 24,
  h4: 18,
  h5: 14,
  h6: 12,
  h7: 10,
}

const Heading: React.FC<Props> = ({ children, as = 'h2', ...rest }) => {
  const computedProps: FontSizeProps = {
    fontSize: headingSizes[as],
  }

  return (
    <StyledHeading {...rest} {...computedProps}>
      {children}
    </StyledHeading>
  )
}

export default Heading
