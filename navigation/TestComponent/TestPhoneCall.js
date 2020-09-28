import React, { Component } from "react";
import {Alert,Modal,StyleSheet,Text,TouchableHighlight,View, TextInput} from "react-native";
import PropTypes from 'prop-types';




export default class TestphoneCall extends  Component{
    render() {
        return(
            <View>
                <TextInput
                    
                    autoCompleteType={"tel"}
                    dataDetectorTypes={'phoneNumber'}
                    editable={false}
                    multiline
                    {...this.props}
                    >
                    {+33603366705}
                </TextInput>
            </View>
        )
    }
}