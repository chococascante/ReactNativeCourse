import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PostNavigator from './StackNavigator';
import AppClass from '../components/Ejemplos/AppClass';

const Tabs = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tabs.Navigator lazy>
      <Tabs.Screen
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        name="Stack"
        component={PostNavigator}
      />
      <Tabs.Screen name="Clase" component={AppClass} />
    </Tabs.Navigator>
  );
}
