import React from 'react';
import Header from '../../common/Header';
import { createStackNavigator } from '@react-navigation/stack';

import SettingScreen from './01_SettingScreen';
import SettingDetailScreen from './02_SettingsDetailScreen';

const Stack = createStackNavigator();

function SettingStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Setting" component={SettingScreen} options={{ headerTitle: () => <Header title="Settings" /> }} />
      <Stack.Screen name="SettingDetails" component={SettingDetailScreen} options={{ headerTitle: () => <Header title="Settings Detail" /> }} />
    </Stack.Navigator>
  );
}

export default SettingStackNavigator;
