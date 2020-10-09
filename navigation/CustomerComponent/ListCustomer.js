import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ListDataCustomer from './ListDataCustomer';


import {db} from '../../components/Firebase/firebaseConfig';
import firebase from 'firebase';
import TestListCustomer from '../TestComponent/TestListCustomer';









export default class ListCustomer extends Component {
  state = {
    
    customer: {},
    data: []
    
  };

  componentDidMount() {
    let customerRef;
    let self = this
    firebase.auth().onAuthStateChanged(function(user){

      if (user) {
        var userUid = user.uid;
        self.setState({userUid})
        customerRef = db.ref('/compagny/'+ userUid + '/customer');
      }

      customerRef.on('value', snapshot => {
        let data = snapshot.val();
        let customer = Object.values(data);

        self.setState({ 
          customer: customer,
          data: data
         });      
         
      });
    })

  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.customer.length > 0 ? (
          <ListDataCustomer customer={this.state.customer} />
        ) : (
          <Text>No items</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#ebebeb',
    marginTop: 50,
    flex: 0,
  },
  
});