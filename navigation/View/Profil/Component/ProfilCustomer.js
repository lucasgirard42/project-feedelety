import React, { Component } from 'react';
import { View, Text, Button, Icon, StyleSheet } from 'react-native';
import {Card} from 'react-native-elements';






export default class ProfilCustomer extends Component{
    constructor(props){
        super(props);
      }


    render(){
        // const c = this.props.customer;
        return(
            <View style={styles.container}>
                <Button onPress={() => this.props.navigation.goBack()} title="Go back from ListCustomer" />
                <Card>
                    <Card.Image style={styles.itemImage} source={require('../../../../assets/flame.png')  } />
                    <Text style={styles.text}>Girard Lucas</Text>
                  
                </Card>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:3,
    },

    itemImage:{
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "orange"


    }
})