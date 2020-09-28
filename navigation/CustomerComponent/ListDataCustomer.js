import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import Test from '../TestComponent/Test';
import { Entypo } from '@expo/vector-icons';



const message = () => {
  
  console.log("hello world");
}

export default class ListDataCustomer extends Component {
  static propTypes = {
    customer: PropTypes.array.isRequired
  };

  render() {
    return (
      <View style={styles.itemsList}>
        {this.props.customer.map((customer, index) => {
          return (
            <View key={index}>
              <Text style={styles.itemtext}>{customer.entreprise}  <TouchableOpacity  onPress={ message}><Entypo name="phone" size={24} color="black"/></TouchableOpacity></Text>
              {/* <Text style={styles.itemtext}>{customer.firstname}</Text>
              <Text style={styles.itemtext}>{customer.lastname}</Text>
              <Text style={styles.itemtext}>{customer.email}</Text>
              <Text style={styles.itemtext}>{customer.address}</Text> */}
              <Text style={styles.itemtext}>{customer.phone}</Text> 
              
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 50,

  },
  itemtext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',

  }
});