import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import Setting from './component/Setting';







function Client() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>coucou</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
    
      
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Client" component={Client} />
        <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
    
    
  );
}