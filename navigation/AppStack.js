import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import Setting from './SettingComponent/Setting';
import Customer from './CustomerComponent/Customer';
// import Test from './TestComponent/TestListCustomer';

const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Client" component={Customer} />
        <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
  );
}