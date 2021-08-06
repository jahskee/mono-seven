import React from 'react';
import HomeStackNavigator from '../stacks/home/00_HomeStackNavigator';
import SettingStackNavigator from '../stacks/settings/00_SettingsStackNavigator';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
          //tabBarIcon: () => <Text>Home</Text>,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingStackNavigator}
        options={{
          tabBarLabel: 'Settings',
          //tabBarIcon: () => <Text>Home</Text>,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
