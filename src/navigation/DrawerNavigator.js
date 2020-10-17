import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Card from '../components/Card';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tabs" component={BottomTabNavigator} />
      <Drawer.Screen name="Card" component={Card} />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
