import React from 'react';
import Header from '../../common/Header';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './01_HomeScreen';
import DetailScreen from './02_DetailScreen';

const Stack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: () => <Header title="Home" /> }} />
      <Stack.Screen name="Details" component={DetailScreen} options={{ headerTitle: () => <Header title="Detail" /> }} />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;
