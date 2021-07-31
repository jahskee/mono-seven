import 'react-native-gesture-handler';
import LDClient from 'launchdarkly-react-native-client-sdk';

import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, StyleSheet, useColorScheme, View } from 'react-native';

import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  let client = new LDClient();
  let config = {
    mobileKey: 'mob-2bf3346d-291b-4143-b1e4-98cf266d5f501',
  };
  let user = { key: 'fake@example.com' };
  client.configure(config, user).then(
    (success) => console.log('launchdarkly loaded .' + success),
    (error) => console.log(error)
  );

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
          <Text> Testing 2 </Text>
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
