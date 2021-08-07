import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Header({ title }: any) {
  return (
    <View style={styles.root}>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Header;
