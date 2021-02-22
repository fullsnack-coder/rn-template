/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { text } from '@storybook/addon-knobs'

import Paragraph from '../paragraph'
import Heading from '../heading'

storiesOf('Typography', module)
  .addDecorator((story: any) => (
    <View style={{ padding: 20 }}>{story?.()}</View>
  ))
  .add('paragraph', () => <Paragraph>Sample paragraph</Paragraph>)
  .add('heading - default', () => <Heading>Heading - default</Heading>)
  .add('heading - bold', () => (
    <Heading fontWeight="bold">{text('Heading text', 'Heading bold')}</Heading>
  ))
  .add('heading - h1', () => (
    <Heading as="h1">{text('Heading text', 'Heading h1')}</Heading>
  ))
  .add('heading - h2', () => (
    <Heading as="h2">{text('Heading text', 'Heading h2')}</Heading>
  ))
  .add('heading - h3', () => (
    <Heading as="h3">{text('Heading text', 'Heading h3')}</Heading>
  ))
  .add('heading - h4', () => (
    <Heading as="h4">{text('Heading text', 'Heading h4')}</Heading>
  ))
  .add('heading - h5', () => (
    <Heading as="h5">{text('Heading text', 'Heading h5')}</Heading>
  ))
  .add('heading - h6', () => (
    <Heading as="h6">{text('Heading text', 'Heading h6')}</Heading>
  ))
  .add('heading - h7', () => (
    <Heading as="h7">{text('Heading text', 'Heading h7')}</Heading>
  ))
