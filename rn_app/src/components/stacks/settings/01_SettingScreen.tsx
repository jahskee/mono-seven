import * as React from 'react';
import { View, Text, Button, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import T from 'prop-types';

function SettingScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.root}>
        <Text>Settings</Text>
        <Button title="Go To Details" onPress={() => navigation.navigate('SettingDetails')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

SettingScreen.propTypes = {
  navigation: T.object.isRequired,
};

export default SettingScreen;
