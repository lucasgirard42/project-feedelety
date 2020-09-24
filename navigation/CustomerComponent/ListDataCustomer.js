import React, { Component } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';






export default class ListDataCustomer extends Component{
    static propTypes ={
        customer: PropTypes.array.isRequired
    };

    render(){
        return(
            <View style={styles.itemsList}>
                {this.props.customer.map((customer, index) =>{
                    <View key={index}>
                        <Text style={styles.itemtext}>{customer.lastname}</Text>

                    </View>
                })}
            </View>
        );
    }
}



const styles = StyleSheet.create({
    itemsList: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    itemtext: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  });