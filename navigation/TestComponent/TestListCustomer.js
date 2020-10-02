import React, { Component } from 'react';
import { View, Text, StyleSheet,AppRegistry,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ListItem, Icon, Avatar,  } from 'react-native-elements';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import Communication from 'react-native-communications';

// const list = [
//     {
//       name: 'Amy Farha',
//       avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//       subtitle: 'Vice President'
//     },
//     {
//       name: 'Chris Jackson',
//       avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//       subtitle: 'Vice Chairman'
//     },
    
//   ]



  export default class TestListCustomer extends Component{
    static propTypes = {
        customer: PropTypes.array.isRequired
      };
       
    
    
    render(){
        <View style={styles.itemsList}>
        {this.props.customer.map((customer, index) => {
         let phone = customer.phone;
         let email = customer.email;
        //  console.log(email);
        
          return (
            <View key={index}>
              <Text style={styles.itemtext}>{customer.lastname} {customer.firstname}  
                <TouchableOpacity onPress={ () => Communication.phonecall (phone, true)}>
                  <Entypo name="phone" size={24} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Communication.text(phone)}>
                 <Entypo name="message" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => Communication.email([email],null,null,'objet:','Bonjour')}>
                  <Entypo name="email" size={24} color="black" />
                </TouchableOpacity>
              </Text>
              {/* <Text style={styles.itemtext}>{customer.firstname}</Text>
              <Text style={styles.itemtext}>{customer.lastname}</Text>
              <Text style={styles.itemtext}>{customer.email}</Text>
              <Text style={styles.itemtext}>{customer.address}</Text> 
              <Text style={styles.itemtext}>{customer.phone}</Text> */}
              
              
            </View>
          );
        })}
      </View>
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