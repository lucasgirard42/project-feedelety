  import React, { Component } from 'react';
  import { View, Text, StyleSheet,AppRegistry,TouchableOpacity,Button, Alert } from 'react-native';
  import Communication from 'react-native-communications';
  import { Icon } from 'react-native-elements';
  import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";;
  import {  Thumbnail } from 'native-base';
  import {db} from '../../../../components/Firebase/firebaseConfig';
  import firebase from 'firebase';

 
  

  export default class ListDataCustomer extends Component  {
    constructor(props){
      super(props);
    }
    
    state ={
      userUid: {},
      customers: {},
      data: [],
    }
    
    componentDidMount(){
      let customerRef;
      let self = this
      firebase.auth().onAuthStateChanged(function(user){
       if (user) {
         var userUid = user.uid;
         self.setState({userUid})
         customerRef = db.ref('/compangny/'+ userUid + '/customer');
        }

      });
    }
    
    
    remove_press(){
      
      Alert.alert("Confirm Dialog",
      "Are you sure to remove" + this.props.customer.firstname
      + "?",
      [
        {text: "yes", onPress : ()=>{
          // db.ref('/compagny/'+ this.state.userUid + '/customer/' ).remove();
          db.ref('/compagny/' + this.state.userUid).child('/customer/').remove();
        } }, 
        {text: 'No'}
      ]
      )
      
    }
    
    render() {
      
      const c = this.props.customer;
      const { navigate } = this.props.navigation;

      return (
          <View  >
            <Collapse  style={{borderBottomWidth:0,borderTopWidth:0.5}}>
              <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'white'}}>
                <View  style={{width:'25%',alignItems:'center'}}>
                  <Thumbnail source={{uri: c.image }} />
                </View>
                <View style={{width:'60%'}}>
                  <Text>{c.lastname} {c.firstname}</ Text>
                  <Icon name="delete" onPress={() => this.remove_press()}/>
                </View>
              </CollapseHeader>
              <CollapseBody style={{padding:20,justifyContent:'space-between',flexDirection:'row',backgroundColor:'#F8F8F8'}}>
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
                        <TouchableOpacity onPress={()=> navigate('Profil',  c)} >
                          <Icon style={styles.icon} name="info" type="entypo"  color="white" backgroundColor="black" />
                        </TouchableOpacity> 
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