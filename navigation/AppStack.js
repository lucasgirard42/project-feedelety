import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../navigation/screens/HomeScreen';
import Setting from '../navigation/View/Setting/Setting';
import Customer from '../navigation/View/Customer/Customer'
import Profil from '../navigation/View/Profil/Component/ProfilCustomer';


const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} 
                    options={{
                              tabBarLabel: 'Home',
                              tabBarIcon: ({ color, size }) => (
                              <MaterialCommunityIcons name="home" color={color} size={size} />
                              ),
                            }}  
        />
        <Tab.Screen name="Client" component={Customer}
                    options={{
                      tabBarLabel: 'client',
                      tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="view-list" color={color} size={size} />
                      ),
                    }} 
        />
        <Tab.Screen name="Setting" component={Setting}
                    options={{
                      tabBarLabel: 'Setting',
                      tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="settings" color={color} size={size} />
                      ),
                    }}  
        />
        <Tab.Screen name="Profil" component={Profil}
                    options={{
                      tabBarLabel: 'Profil',
                      tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="account" color={color} size={size} />
                      ),
                    }}  
        />
      </Tab.Navigator>
  );
}