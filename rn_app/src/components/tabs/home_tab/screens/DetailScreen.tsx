import * as React from 'react';
import { View, Text, Button } from 'react-native';

function DetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go To Home..." onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default DetailScreen;
