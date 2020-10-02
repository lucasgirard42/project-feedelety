import React, { Component } from 'react';
import { View, Text, StyleSheet,AppRegistry,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import Test from '../TestComponent/Test';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import Communication from 'react-native-communications';
import { Value } from 'react-native-reanimated';
import {ListItem, Avatar} from 'react-native-elements';





export default class ListDataCustomer extends Component {
  static propTypes = {
    customer: PropTypes.array.isRequired
  };

  render() {
    return (
      <View style={styles.itemsList}>
        {this.props.customer.map((customer, index) => {
         let phone = customer.phone;
         let email = customer.email;
        //  console.log(email);
        
          return (
            <ListItem key={index} bottomDivider>
              <Avatar rounded source={{uri:customer.image,}}/>
              <ListItem.Title style={styles.iListItem}>{customer.lastname} {customer.firstname}  
                <TouchableOpacity onPress={ () => Communication.phonecall (phone, true)}>
                  <Entypo name="phone" size={24} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Communication.text(phone)}>
                 <Entypo name="message" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => Communication.email([email],null,null,'objet:','Bonjour')}>
                  <Entypo name="email" size={24} color="black" />
                </TouchableOpacity>
              </ListItem.Title>
              {/* <Text style={styles.itemtext}>{customer.firstname}</Text>
              <Text style={styles.itemtext}>{customer.lastname}</Text>
              <Text style={styles.itemtext}>{customer.email}</Text>
              <Text style={styles.itemtext}>{customer.address}</Text> 
            <Text style={styles.itemtext}>{customer.phone}</Text> */}
              
              
              
            </ListItem>
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

AppRegistry.registerComponent('RNCommunications', () => RNCommunications);