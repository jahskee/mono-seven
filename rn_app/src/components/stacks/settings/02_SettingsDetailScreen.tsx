import * as React from 'react';
import { View, Text, Button, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import T from 'prop-types';

function SettingDetailScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.root}>
        <Text>Setting Details Screen</Text>
        <Button title="Go To Home..." onPress={() => navigation.navigate('Setting')} />
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

SettingDetailScreen.propTypes = {
  navigation: T.object.isRequired,
};

export default SettingDetailScreen;
