import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { AppLoading } from 'expo';
import { Container, Header} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Providers from './navigation';




export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
  
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  
  render(){
    
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Container>
      <Header style={styles.HeaderColor}/>
      <Providers/>
    </Container>
  )
}
}

const styles = StyleSheet.create({
  HeaderColor:{
    backgroundColor: "#f8f8ff",
  },
  
  
})