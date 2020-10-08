import React, { Component } from 'react';
import { View, Text, StyleSheet,AppRegistry,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Communication from 'react-native-communications';
 import { Avatar, Icon} from 'react-native-elements';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";;
import { Thumbnail, List, ListItem, Separator } from 'native-base';




export default class ListDataCustomer extends Component {
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
            
              <View>
                  <Collapse style={{borderBottomWidth:1,borderTopWidth:1}}>
                    <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
                      <View key={index} style={{width:'25%',alignItems:'center'}}>
                        <Thumbnail source={{uri: customer.image, }} />
                      </View>
                      <View style={{width:'60%'}}>
                        <Text>{customer.lastname} {customer.firstname}</Text>
                      </View>
                    </CollapseHeader>
                    <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED'}}>
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
                          <TouchableOpacity onPress={ () => Communication.email([email],null,null,'objet:','Bonjour')}>
                            <Icon style={styles.icon} name="info" type="entypo"  color="white" backgroundColor="black" />
                          </TouchableOpacity>
                        </CollapseHeader>
                        <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
                          <Text>{email}</Text>
                        </CollapseBody>
                      </Collapse>
                    </CollapseBody>
                  </Collapse>
                </View>
            
            
            
            
            
            
            // <ListItem  key={index} bottomDivider>
            //   <Avatar rounded source={{uri:customer.image,}}/>
            //   <ListItem.Title style={styles.cool}  >{customer.lastname} {customer.firstname}  
            //     <TouchableOpacity onPress={ () => Communication.phonecall (phone, true)}>
            //       <Icon style={styles.icon}  name="phone"  type="entypo" color="white" backgroundColor="#00C829"  />
            //     </TouchableOpacity>
            //     <TouchableOpacity onPress={() => Communication.text(phone)}>
            //       <Icon style={styles.icon} name="message" type="entypo" color="white" backgroundColor="#FFBD00" />
            //     </TouchableOpacity>
            //     <TouchableOpacity onPress={ () => Communication.email([email],null,null,'objet:','Bonjour')}>
            //       <Icon style={styles.icon} name="email" type="entypo"  color="white" backgroundColor="#5794FA" />
            //     </TouchableOpacity>
            //     <TouchableOpacity onPress={ () => Communication.email([email],null,null,'objet:','Bonjour')}>
            //       <Icon style={styles.icon} name="info" type="entypo"  color="white" backgroundColor="black" />
            //     </TouchableOpacity>
            //   </ListItem.Title>
              /* <Text style={styles.itemtext}>{customer.firstname}</Text>
              <Text style={styles.itemtext}>{customer.lastname}</Text>
              <Text style={styles.itemtext}>{customer.email}</Text>
              <Text style={styles.itemtext}>{customer.address}</Text> 
            <Text style={styles.itemtext}>{customer.phone}</Text> */
              
              
              
            /* </ListItem> */
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cool: {
    alignContent:'center',
    justifyContent: "space-between",
  },
 
  icon:{
    height:50,
    width: 50,
    borderRadius: 40,
    alignContent:'center',
    justifyContent: "center",
  },
  
});

AppRegistry.registerComponent('RNCommunications', () => RNCommunications);
  