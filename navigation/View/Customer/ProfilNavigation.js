import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilCustomer from '../Profil/Component/ProfilCustomer';




const Stack = createStackNavigator();

export default class ProfilNavigation extends Component {

    render(){
    return(
      <Stack.Navigator>
        <Stack.Screen name="Profil" component={ProfilCustomer} />
      </Stack.Navigator>
  );
    } 
}