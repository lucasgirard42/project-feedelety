  import React, { Component } from 'react';
  import { View, Text, StyleSheet,AppRegistry,TouchableOpacity,Button, Alert } from 'react-native';
  import Communication from 'react-native-communications';
  import { Icon } from 'react-native-elements';
  import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";;
  import {  Thumbnail } from 'native-base';

 
  

  export default class ListDataCustomer extends Component  {
    constructor(props){
      super(props);
      
    }

  // iconPress(id){
  //   console.log(id);
  // }
    render() {
      const c = this.props.customer;
      console.log(this.props.navigation);

      return (
          <View  >
            <Collapse  style={{borderBottomWidth:1,borderTopWidth:1}}>
              <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
                <View  style={{width:'25%',alignItems:'center'}}>
                  <Thumbnail source={{uri: c.image }} />
                </View>
                <View style={{width:'60%'}}>
                  <Text>{c.lastname} {c.firstname}</ Text>
                </View>
              </CollapseHeader>
              <CollapseBody style={{padding:'5%',justifyContent:'space-between',flexDirection:'row',backgroundColor:'#EDEDED'}}>
                <Collapse style={{flexDirection:'row'}}>
                  <CollapseHeader>
                    <TouchableOpacity onPress={ () => Communication.phonecall (c.phone, true)}>
                      <Icon style={styles.icon}  name="phone"  type="entypo" color="white" backgroundColor="#00C829"  />
                    </TouchableOpacity>
                  </CollapseHeader>
                  <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
                    <Text>{c.phone}</Text>
                  </CollapseBody>
                </Collapse>
                <Collapse style={{flexDirection:'row'}}>
                  <CollapseHeader>
                    <TouchableOpacity onPress={() => Communication.text(c.phone)}>
                      <Icon style={styles.icon} name="message" type="entypo" color="white" backgroundColor="#FFBD00" />
                    </TouchableOpacity>
                  </CollapseHeader>
                  <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
                    <Text>{c.phone}</Text>
                  </CollapseBody>
                  </Collapse>
                    <Collapse style={{flexDirection:'row'}}>
                      <CollapseHeader>
                        <TouchableOpacity onPress={ () => Communication.email([c.email],null,null,'objet:','Bonjour')}>
                          <Icon style={styles.icon} name="email" type="entypo"  color="white" backgroundColor="#5794FA" />
                        </TouchableOpacity>
                      </CollapseHeader>
                      <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
                        <Text>{c.email}</Text>
                      </CollapseBody>
                    </Collapse>
                    <Collapse style={{flexDirection:'row'}}>
                      <CollapseHeader>
                        <Icon style={styles.icon} name="info" type="entypo"  color="black" backgroundColor="black" 
                              onPress={()=> this.props.navigation.navigate('Profil')}  />
                      </CollapseHeader>
                    </Collapse>
                  </CollapseBody>
                </Collapse>
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
  });
  AppRegistry.registerComponent('RNCommunications', () => RNCommunications);
    