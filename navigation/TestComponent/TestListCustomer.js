// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// import ListDataCustomer from './ListDataCustomer';

// import {db} from '../../components/Firebase/firebaseConfig';
// import firebase from 'firebase';

// var userUid = firebase.auth().currentUser;
// let customerRef = db.ref('compagny/' + userUid + "/customer/");

// export default class TestListCustomer extends Component{
//     state ={
//         customer:[],
//     };

//     componentDidMount(){
//         customerRef.on('value', snapshot=> {
//             let data = snapshot.val();
//             let customer = Object.values(data);
//             this.setState({ customer});
//         });
//     }
//     render(){
//         return(
//             <View style={styles.container}>
//                 {this.state.customer.length > 0 ? (
//                     <ListDataCustomer customer={this.state.customer} />
//                 ) : (
//                     <Text>No items</Text> 
//                 )}

//             </View>
//         );
//     }
// }



// const styles = StyleSheet.create({
//     container: {
//       backgroundColor: '#ebebeb',
//       marginTop: 50,
//       flex: 0,
//     }
//   });