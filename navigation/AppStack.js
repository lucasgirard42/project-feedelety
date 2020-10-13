import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../navigation/screens/HomeScreen';
import Setting from '../navigation/View/Setting/Setting';
import Customer from '../navigation/View/Customer/Customer'
import Profil from '../navigation/View/Customer/ProfilNavigation';


const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Client" component={Customer} />
        <Tab.Screen name="Setting" component={Setting} />
        <Tab.Screen name="Profil" component={Profil} />
      </Tab.Navigator>
  );
}