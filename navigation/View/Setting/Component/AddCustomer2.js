import React, { Component } from 'react';
import {TouchableOpacity,Button,  Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Form,Text, Item, Input, Label } from 'native-base';
import {db} from '../../../../components/Firebase/firebaseConfig';
import firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';
import  Colors  from '../../../../utils/colors';




 



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


export default class AddCustomer2 extends Component {
     
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

  
  render() {
      
    let { image } = this.state;
    return (
        
          
        <Content>
          <Form style={styles.itemInput}>
            <Item floatingLabel>
              <Label>entreprise</Label>
              <Input style={styles.Input} onChangeText ={(entreprise) => this.setState({entreprise})}/>
            </Item>
            <Item floatingLabel>
              <Label>firstname</Label>
              <Input onChangeText ={(firstname) => this.setState({firstname})}/>
            </Item>
            <Item floatingLabel>
              <Label>lastname</Label>
              <Input onChangeText ={(lastname) => this.setState({lastname})}/>
            </Item>
            <Item floatingLabel>
              <Label>address</Label>
              <Input onChangeText ={(address) => this.setState({address})}/>
            </Item>
            <Item floatingLabel>
              <Label>city</Label>
              <Input onChangeText ={(city) => this.setState({city})} />
            </Item>
            <Item floatingLabel>
              <Label>email</Label>
              <Input onChangeText ={(email) => this.setState({email})}/>
            </Item>
            <Item floatingLabel>
              <Label>phone</Label>
              <Input onChangeText ={(phone) => this.setState({phone})}/>
            </Item>
            <Button   title="Select Image" onPress={this._pickImage} />
              {image &&
              <Image source={{ uri: image }} style={{ width: 70, height: 70 }} />}
            <TouchableOpacity style={styles.button} underlayColor="white"  onPress= { () => addCustomer(
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
            </TouchableOpacity>
          </Form>
        </Content>
        
    
    );
  }
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 18,
        color: Colors.white,
        alignSelf: "center",
      },
      button: {
        height: 45,
        flexDirection: "row",
        backgroundColor: Colors.primary,
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: "stretch",
        justifyContent: "center",
      },
    
      
})