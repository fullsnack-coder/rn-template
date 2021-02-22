import React from 'react'
import { Text, StatusBar, View, StyleProp, ViewStyle } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ThemeProvider } from './src/theme'

const App = () => {
  const containerStyles: StyleProp<ViewStyle> = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView edges={['top']} style={{ flex: 1 }}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{ flex: 1 }}>
          <View style={containerStyles}>
            <Text>Initial configuration</Text>
          </View>
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

export default STORYBOOK_STARTS ? require('./storybook').default : AppWrapper
