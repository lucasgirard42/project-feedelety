import React, { Component } from 'react';
import { View, Text, Button, Icon } from 'react-native';
import {Card} from 'react-native-elements';






export default class ProfilCustomer extends Component{
    constructor(props){
        super(props);
        
      }


    render(){
        // const c = this.props.customer;
        return(
            <View>
                <Card>
                 <Card.Title>HELLO WORLD</Card.Title>
                    <Card.Divider/>
                    {/* <Card.Image source={{uri: c.image }} /> */}
                    <Text style={{marginBottom: 10}}>
                    {/* {this.props.customer.lastname}  */}
                    </Text>
                </Card>
            </View>
        )
    }
}