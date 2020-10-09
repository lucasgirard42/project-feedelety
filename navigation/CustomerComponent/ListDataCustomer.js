import React, { Component } from 'react';
import { View, Text, StyleSheet,AppRegistry,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Communication from 'react-native-communications';
import { Icon } from 'react-native-elements';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";;
import { Button, Thumbnail } from 'native-base';
import ProfilCustomer from './ProfilCustomer';
 

export default class ListDataCustomer extends Component {

  
iconPress(id){
  console.log(id);
}

  static propTypes = {
    customer: PropTypes.array.isRequired
  };
  render() {
    return (
      <View >
        
        {this.props.customer.map((customer, index) => {
         let phone = customer.phone;
         let email = customer.email;
        //  console.log(email);
          return (
              <View key={index}>
                  <Collapse  style={{borderBottomWidth:1,borderTopWidth:1}}>
                    <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
                      <View  style={{width:'25%',alignItems:'center'}}>
                        <Thumbnail source={{uri: customer.image, }} />
                      </View>
                      <View style={{width:'60%'}}>
                        <Text>{customer.lastname} {customer.firstname}</Text>
                      </View>
                    </CollapseHeader>
                    <CollapseBody style={{padding:'5%',justifyContent:'space-between',flexDirection:'row',backgroundColor:'#EDEDED'}}>
                      <Collapse style={{flexDirection:'row'}}>
                        <CollapseHeader>
                        <TouchableOpacity onPress={ () => Communication.phonecall (phone, true)}>
                          <Icon style={styles.icon}  name="phone"  type="entypo" color="white" backgroundColor="#00C829"  />
                        </TouchableOpacity>
                        </CollapseHeader>
                        <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
                          <Text>{phone}</Text>
                        </CollapseBody>
                      </Collapse>
                      <Collapse style={{flexDirection:'row'}}>
                        <CollapseHeader>
                          <TouchableOpacity onPress={() => Communication.text(phone)}>
                            <Icon style={styles.icon} name="message" type="entypo" color="white" backgroundColor="#FFBD00" />
                          </TouchableOpacity>
                        </CollapseHeader>
                        <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
                          <Text>{phone}</Text>
                        </CollapseBody>
                      </Collapse>
                      <Collapse style={{flexDirection:'row'}}>
                        <CollapseHeader>
                          <TouchableOpacity onPress={ () => Communication.email([email],null,null,'objet:','Bonjour')}>
                            <Icon style={styles.icon} name="email" type="entypo"  color="white" backgroundColor="#5794FA" />
                          </TouchableOpacity>
                        </CollapseHeader>
                        <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
                          <Text>{email}</Text>
                        </CollapseBody>
                      </Collapse>
                      <Collapse style={{flexDirection:'row'}}>
                        <CollapseHeader>
                          
                            <Icon onPress={() => console.log(customer.userUid)}  style={styles.icon} name="info" type="entypo"  color="white" backgroundColor="black" />
                        </CollapseHeader>
                        <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
                          <Text>{email}</Text>
                        </CollapseBody>
                      </Collapse>
                    </CollapseBody>
                  </Collapse>
                  
                </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
   icon:{
    height:50,
    width: 50,
    borderRadius: 40,
    alignContent:'center',
    justifyContent: "center",
  },
<<<<<<< HEAD
=======

>>>>>>> f627ea6c8f47b5aadeba3485aaff6c37f72c33ad
});
AppRegistry.registerComponent('RNCommunications', () => RNCommunications);
  