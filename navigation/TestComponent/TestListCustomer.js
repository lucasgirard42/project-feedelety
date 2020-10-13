import React, { Component } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import ProfilCustomer from '../CustomerComponent/ProfilCustomer';
import ListCustomer from '../CustomerComponent/ListCustomer';
import Customer from '../CustomerComponent/Customer';
import ListDataCustomer from '../CustomerComponent/ListDataCustomer';



const Stack = createStackNavigator();

export default class TestListCustomer extends Component {
  render(){
    return(
      <Stack.Navigator>
        <Stack.Screen name="Profil" component={ProfilCustomer} />
        <Stack.Screen name="listCustomer" component={ListCustomer} />
        <Stack.Screen name="customer" component={Customer} />
        <Stack.Screen name="listDataCustomer" component={ListDataCustomer} />
      </Stack.Navigator>
  );
    } 
  }