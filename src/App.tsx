/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { StatusBar, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ThemeProvider } from './theme'

import Box from './components/Box'
import Typography from './components/Typography'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView edges={['top']} style={{ flex: 1 }}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{ flex: 1 }}>
          <Box.View flex={1} justifyContent="center" alignItems="center">
            <Typography.P>Initial configuration</Typography.P>
          </Box.View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const AppWrapper = () => (
  <SafeAreaProvider>
    <ThemeProvider>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </ThemeProvider>
  </SafeAreaProvider>
)

const STORYBOOK_STARTS = false

export default STORYBOOK_STARTS ? require('../storybook').default : AppWrapper
