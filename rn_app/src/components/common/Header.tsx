import * as React from 'react';
import { View, Text } from 'react-native';

function Header({ title }: any) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>{title}</Text>
    </View>
  );
}

export default Header;
