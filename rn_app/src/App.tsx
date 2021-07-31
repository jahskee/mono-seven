/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import LDClient from 'launchdarkly-react-native-client-sdk';

import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, StyleSheet, useColorScheme, View } from 'react-native';

import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <ScrollView style={styles.scroll} contentInsetAdjustmentBehavior="automatic">
          <Header />
          <Text> Testing 1132 </Text>
          <View />
        </ScrollView>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scroll: {},
});

export default App;
