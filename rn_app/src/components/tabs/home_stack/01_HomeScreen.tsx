import * as React from 'react';
import { View, Text, Button, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import T from 'prop-types';

function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.root}>
        <Text>Home Screen</Text>
        <Button title="Go To Details" onPress={() => navigation.navigate('Details')} />
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

HomeScreen.propTypes = {
  navigation: T.object.isRequired,
};

export default HomeScreen;
