// import React, { Component } from 'react';
// import {TouchableOpacity,Button,  Image, StyleSheet } from 'react-native';
// import {  Content, Form,Text, Item, Input, Label } from 'native-base';
// import {db} from '../../../../components/Firebase/firebaseConfig';
// import firebase from 'firebase';
// import * as ImagePicker from 'expo-image-picker';
// import  Colors  from '../../../../utils/colors';
// import { Icon } from 'react-native-elements';





//   export default class DeleteCustomer extends Component {



    //   componentDidMount() {
    //     let customerRef;
    //     let self = this
    //     firebase.auth().onAuthStateChanged(function(user){
    
    //       if (user) {
    //         var userUid = user.uid;
    //         self.setState({userUid})
    //         customerRef = db.ref('/compagny/'+ userUid + '/customer/');
    //       }
    
    //       customerRef.on('value', snapshot => {
    //         let data = snapshot.val();
    //         let customers = Object.values(data);
    //         self.setState({ 
    //           customers: customers,
    //           data: data
    //          });
    //          console.log(data);
    //       })
    //     });
    // }
//     removeCustomer(){
//       firebase.database().ref('compagny/' + userId + '/customer/').remove()
//     }



//       render(){
//           return(
//               <Icon name="delete"  onPress={() => removeCustomer() } />
//           )
//       }

//   }
      
    