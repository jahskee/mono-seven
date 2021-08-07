import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingStackNavigator from '../stacks/settings/00_SettingsStackNavigator';
import TabNavigator from '../tabs/BottomTabs';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Settings" component={SettingStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
