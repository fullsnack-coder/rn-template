/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { ScrollView } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { text } from '@storybook/addon-knobs'

import Paragraph from '../paragraph'
import Heading from '../heading'

storiesOf('Typography', module)
  .addDecorator((story: any) => (
    <ScrollView contentContainerStyle={{ padding: 20 }}>{story?.()}</ScrollView>
  ))
  .add('paragraph', () => (
    <>
      <Paragraph>
        El veloz murciélago hindú comía feliz cardillo y kiwi.
      </Paragraph>
    </>
  ))
  .add('heading - default', () => <Heading>Heading - default</Heading>)
  .add('heading - bold', () => (
    <Heading fontWeight="bold">
      {text(
        'El veloz murciélago hindú comía feliz cardillo y kiwi.',
        'Heading bold',
      )}
    </Heading>
  ))
  .add('heading - variants', () => (
    <>
      <Heading as="h1">
        {text(
          'Heading h1',
          'El veloz murciélago hindú comía feliz cardillo y kiwi. H1',
        )}
      </Heading>
      <Heading as="h2">
        {text(
          'Heading h2',
          'El veloz murciélago hindú comía feliz cardillo y kiwi. H2',
        )}
      </Heading>
      <Heading as="h3">
        {text(
          'Heading h3',
          'El veloz murciélago hindú comía feliz cardillo y kiwi. H3',
        )}
      </Heading>
      <Heading as="h4">
        {text(
          'Heading h4',
          'El veloz murciélago hindú comía feliz cardillo y kiwi. H4',
        )}
      </Heading>
      <Heading as="h5">
        {text(
          'Heading h5',
          'El veloz murciélago hindú comía feliz cardillo y kiwi. H5',
        )}
      </Heading>
      <Heading as="h6">
        {text(
          'Heading h6',
          'El veloz murciélago hindú comía feliz cardillo y kiwi. H6',
        )}
      </Heading>
      <Heading as="h7">
        {text(
          'Heading h7',
          'El veloz murciélago hindú comía feliz cardillo y kiwi. H7',
        )}
      </Heading>
    </>
  ))
