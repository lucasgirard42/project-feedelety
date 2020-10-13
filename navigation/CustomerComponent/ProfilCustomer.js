import React, { Component } from 'react';
import { View, Text, Button, Icon } from 'react-native';
import {Card} from 'react-native-elements';






export default class ProfilCustomer extends Component{



    render(){
        return(
            <View>
                <Card>
                 <Card.Title>HELLO WORLD</Card.Title>
                    <Card.Divider/>
                    <Card.Image source={require('../../assets/flame.png')} />
                    <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                </Card>
            </View>
        )
    }
}