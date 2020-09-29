import React, { Component } from 'react';
import {View, Text,TouchableHighlight, StyleSheet,TextInput, Alert} from 'react-native';
import {db} from '../../components/Firebase/firebaseConfig';
import firebase from 'firebase';



let addCustomer=(userUid,entreprise,firstname, lastname, address, email,phone, name) => {
    db.ref('compagny/'+ userUid+ '/customer' ).push({
        
        entreprise,
        name,
        firstname,
        lastname,
        address,
        email,
        phone,
  });
  
};


export default class AddCustomer extends Component{
    state={
        userUid:"",
        entreprise:"",
        name:"",
        firstname:"",
        lastname:"", 
        address:"",
        email:"",
        phone:"",
    };

    componentDidMount(){
      let self = this
      firebase.auth().onAuthStateChanged(function(user) {
        console.log(user);
        if (user) {           
            var userUid = user.uid;
            
           
            self.setState({
               userUid,
               

            })         
        } 
      });
    }

    handleChange = (e) => { 
    this.setState({
        entreprise: e.nativeEvent.text,
        name: e.nativeEvent.text,
        firstname: e.nativeEvent.text,
        lastname: e.nativeEvent.text,
        address: e.nativeEvent.text,
        email: e.nativeEvent.text,
        phone: e.nativeEvent.text,
    });
}
    render(){
    return(
        <View style={StyleSheet.main}>
            <TextInput style={styles.itemInput} placeholder = "entreprise" onChangeText ={(entreprise) => this.setState({entreprise})} />
            <TextInput style={styles.itemInput} placeholder = "name" onChangeText ={(name) => this.setState({name})} />
            <TextInput style={styles.itemInput} placeholder = "firstname" onChangeText ={(firstname) => this.setState({firstname})} />
            <TextInput style={styles.itemInput} placeholder = "lastname" onChangeText ={(lastname) => this.setState({lastname})} />
            <TextInput style={styles.itemInput} placeholder = "address" onChangeText ={(address) => this.setState({address})} />
            <TextInput style={styles.itemInput} placeholder = "email" onChangeText ={(email) => this.setState({email})} />
            <TextInput style={styles.itemInput} placeholder = "phone" onChangeText ={(phone) => this.setState({phone})} />
            <TextInput style={styles.itemInput} placeholder = "userUid" value={this.state.userUid} onChangeText ={(userUid) => this.setState({userUid})} />

            <TouchableHighlight style={styles.button} underlayColor="white"  onPress= { () => addCustomer(
                this.state.userUid,
                this.state.entreprise,
                this.state.name,
                this.state.firstname,
                this.state.lastname,
                this.state.address,
                this.state.email,
                this.state.phone,
                
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