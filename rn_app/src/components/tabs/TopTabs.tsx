import React from 'react';
import HomeStackNavigator from './home_stack/HomeStackNavigator';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Settings" component={HomeStackNavigator} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
