import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {db} from '../../components/Firebase/firebaseConfig';
import ListDataCustomer from './ListDataCustomer';


let customerRef = db.ref('/Customer');




export default class ListCustomer extends Component{
    state = {
        customer:[]
    };


    componentDidMount(){
        customerRef.on('value', snapshot => {
            let data = snapshot.val();
            let customer = Object.values(data);
            this.setState({customer});
        });
    }
    render(){
        return(
            <View style={styles.container}>
                {this.state.customer.length > 0 ? (
                    <ListDataCustomer customer={this.state.customer}  />
                ) : (
                    <Text>vous n'avez pas de client</Text>
                )}
               
            </View>
               
        );
        
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ebebeb'
    }
  });

