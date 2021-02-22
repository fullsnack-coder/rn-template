import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';

const App = () => {
  const containerStyles: StyleProp<ViewStyle> = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={containerStyles}>
            <Text>Initial configuration</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
