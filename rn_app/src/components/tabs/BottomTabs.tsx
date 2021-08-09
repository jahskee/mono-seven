import React from 'react';
import HomeStackNavigator from '../stacks/home/00_HomeStackNavigator';
import SettingStackNavigator from '../stacks/settings/00_SettingsStackNavigator';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="SettingsTab"
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
