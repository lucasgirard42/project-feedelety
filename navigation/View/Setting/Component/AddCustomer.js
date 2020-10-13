import React, { Component } from 'react';
import {View, Text,TouchableHighlight, StyleSheet,TextInput, Alert, Button, Image, SafeAreaView, ScrollView, KeyboardAvoidingView} from 'react-native';
import {db} from '../../../../components/Firebase/firebaseConfig';
import firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';



let addCustomer=(userUid,entreprise,firstname, lastname, address,city, email,phone,image) => {
    db.ref('compagny/'+ userUid+ '/customer' ).push({
        
        entreprise,
        firstname,
        lastname,
        address,
        city,
        email,
        phone,
        image,
  });
};


export default class AddCustomer extends Component{
    state={
        userUid:"",
        entreprise:"",
        firstname:"",
        lastname:"", 
        address:"",
        city:"",
        email:"",
        phone:"",
        image: null,
    };

    componentDidMount(){
      let self = this
      firebase.auth().onAuthStateChanged(function(user) {
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
        firstname: e.nativeEvent.text,
        lastname: e.nativeEvent.text,
        address: e.nativeEvent.text,
        city: e.nativeEvent.text,
        email: e.nativeEvent.text,
        phone: e.nativeEvent.text,
        image: e.nativeEvent.text,
    });
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    alert(result.uri);
    console.log(result)

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };



    render(){
      let { image } = this.state;
      return(
          <KeyboardAvoidingView style={styles.container} behavior="padding"  >
        <View style={StyleSheet.main}>
            <TextInput style={styles.itemInput} placeholder = "entreprise" onChangeText ={(entreprise) => this.setState({entreprise})} />
            <TextInput style={styles.itemInput} placeholder = "firstname" onChangeText ={(firstname) => this.setState({firstname})} />
            <TextInput style={styles.itemInput} placeholder = "lastname" onChangeText ={(lastname) => this.setState({lastname})} />
            <TextInput style={styles.itemInput} placeholder = "address" onChangeText ={(address) => this.setState({address})} />
            <TextInput style={styles.itemInput} placeholder = "city" onChangeText ={(city) => this.setState({city})} />
            <TextInput style={styles.itemInput} placeholder = "email" onChangeText ={(email) => this.setState({email})} />
            <TextInput style={styles.itemInput} placeholder = "phone" onChangeText ={(phone) => this.setState({phone})} />
            <Button title="Select Image" onPress={this._pickImage} />
              {image &&
              <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            {/* <TextInput style={styles.itemInput} placeholder = "userUid" value={this.state.userUid} onChangeText ={(userUid) => this.setState({userUid})} /> */}

            <TouchableHighlight style={styles.button} underlayColor="white"  onPress= { () => addCustomer(
                this.state.userUid,
                this.state.entreprise,
                this.state.firstname,
                this.state.lastname,
                this.state.address,
                this.state.city,
                this.state.email,
                this.state.phone,
                this.state.image,
            )}>
            <Text style={styles.buttonText}>Add</Text>
            </TouchableHighlight>
            {/* </ScrollView> */}
            {/* </SafeAreaView> */}
        </View>
          </KeyboardAvoidingView>
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
