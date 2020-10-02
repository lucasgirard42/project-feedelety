import { firestore } from 'firebase';
import React, { Component } from 'react';
import {View, Text,TouchableHighlight, StyleSheet,TextInput, Alert} from 'react-native';
import {db} from '../../components/Firebase/firebaseConfig';
import firebase from 'firebase';
import Modal from "./testalert"






function AddUsers(entreprise, firstname, lastname, address) {
    db.ref("users/" + entreprise).push({
        entreprise,
        firstname,
        lastname,
        address,
        
    });
}

export default class AddUser extends Component{
    state={
        entreprise:"",
        firstname:"",
        lastname:"", 
        address:"",
        email:"",
        userEmail: ""
    };

    componentDidMount(){
      let self = this
      firebase.auth().onAuthStateChanged(function(user) {
        
        if (user) {           
            var user = user.email;
            self.setState({
              userEmail: user
            })         
        } 
      });
    }

    handleChange = (e) => { 
    this.setState({
        entreprise: e.nativeEvent.text,
        firstname: e.nativeEvent.text,
        lastname: e.nativeEvent.text,
        address: e.nativeEvent.text,
        email: e.nativeEvent.text,
    });
}
    render(){
    return(
        <View style={StyleSheet.main}>
            <TextInput style={styles.itemInput} placeholder = "entreprise" onChangeText ={(entreprise) => this.setState({entreprise})} />
            <TextInput style={styles.itemInput} placeholder = "firstname" onChangeText ={(firstname) => this.setState({firstname})} />
            <TextInput style={styles.itemInput} placeholder = "lastname" onChangeText ={(lastname) => this.setState({lastname})} />
            <TextInput style={styles.itemInput} placeholder = "address" onChangeText ={(address) => this.setState({address})} />
            <TextInput style={styles.itemInput} placeholder = "email" value={this.state.userEmail} onChangeText ={(email) => this.setState({email})} />
            <TouchableHighlight style={styles.button} underlayColor="white"   onPress= { () => AddUsers(
                this.state.entreprise,
                this.state.firstname,
                this.state.lastname,
                this.state.address,
                this.state.email,
            )}>
            

            <Modal style={styles.buttonText}>Add</Modal>
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
 