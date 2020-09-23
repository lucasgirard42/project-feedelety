import * as React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import './Routes'

// const Stack = createStackNavigator();

// export default function AppStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//     </Stack.Navigator>
//   );
// }



function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
    
    
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    
    
  );
}