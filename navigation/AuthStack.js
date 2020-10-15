import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../navigation/screens/WelcomeScreen';
import RegisterScreen from '../navigation/screens/RegisterScreen';
import LoginScreen from '../navigation/screens/LoginScreen';
import ForgotPasswordScreen from '../navigation/screens/ForgotPasswordScreen';
import ProfilCustomer from '../navigation/View/Profil/Component/ProfilCustomer';



const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome" headerMode="none">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name=" Profil" component={ProfilCustomer} />
    </Stack.Navigator>
  );
}
