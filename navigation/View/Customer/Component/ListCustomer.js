import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ListDataCustomer from './ListDataCustomer';
import {db} from '../../../../components/Firebase/firebaseConfig';
import firebase from 'firebase';



export default class ListCustomer extends Component {
  state = {
    customers: {},
    data: [],
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
        let customers = Object.values(data);
        self.setState({ 
          customers: customers,
          data: data
         });
         
      })
    });
  }

  render() {
    
    return (
      <View style={styles.container}>
        {this.state.customers.length > 0 ? (
          this.state.customers.map((customer, index) => {
            
            
          return(
            <ListDataCustomer key={index} customer={customer} navigation={this.props.navigation}/>
            )
          })
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