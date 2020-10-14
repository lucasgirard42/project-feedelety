import React, { Component } from 'react';
import {View, Text,TouchableHighlight, StyleSheet,TextInput, Alert} from 'react-native';
import {db} from '../../../components/Firebase/firebaseConfig';
import firebase from 'firebase';



function AddUsers(compagny, userUid,userEmail) {
    db.ref("compagny/" + userUid).set({
        compagny,
        userUid,
        userEmail
    });
}



export default class TestUserId extends Component{
    state={
        compagny:"",
        userUid:"",
        userEmail:"",
    };

    componentDidMount(){
      let self = this
      firebase.auth().onAuthStateChanged(function(user) {
        
        if (user) {           
            var userUid = user.uid;
            var user = user.email;
           
            self.setState({
               userUid,
               userEmail: user

            })         
        } 
      });
    }

    handleChange = (e) => { 
    this.setState({
        compagny: e.nativeEvent.text,
        
    });
}
    render(){
    return(
        <View style={StyleSheet.main}>
            <TextInput style={styles.itemInput} placeholder = "compagny" onChangeText ={(compagny) => this.setState({compagny})} />
            <TextInput style={styles.itemInput} placeholder = "userUid" value={this.state.userUid} onChangeText ={(userUid) => this.setState({userUid})} />
            <TextInput style={styles.itemInput} placeholder = "email" value={this.state.userEmail} onChangeText ={(email) => this.setState({email})} />
            <TouchableHighlight style={styles.button} underlayColor="white"   onPress= { () => AddUsers(
                this.state.compagny,
                this.state.userUid,
                this.state.userEmail,
            )}>
            <Text style={styles.buttonText}>Add</Text>
            </TouchableHighlight>
        </View>
    )
    }
}


const styles = StyleSheet.create({
    main: {
      flex: 1,
      padding: 30,
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "#ffffff",
    },
    title: {
      marginBottom: 20,
      fontSize: 25,
      textAlign: "center",
    },
    itemInput: {
      height: 50,
      padding: 4,
      marginRight: 5,
      fontSize: 23,
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 8,
      color: "black",
    },
    buttonText: {
      fontSize: 18,
      color: "#111",
      alignSelf: "center",
    },
    button: {
      height: 45,
      flexDirection: "row",
      backgroundColor: "white",
      borderColor: "white",
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      alignSelf: "stretch",
      justifyContent: "center",
    },
  });
 