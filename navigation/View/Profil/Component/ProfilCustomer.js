import React, { Component } from "react";
import { View, Image, StyleSheet, TouchableOpacity, AppRegistry } from "react-native";
import {Container,Header,Content,Card,CardItem,Thumbnail,Text,Button,Left,Body,Right,} from "native-base";

import Communication from 'react-native-communications';
import { Icon } from 'react-native-elements';

export default class ProfilCustomer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const c = this.props.customer;
    return (
      // <Container>
      // <Header />
      <Content>
        <Card style={styles.container}>
          <CardItem style={styles.imageCard}>
              <Image
                source={require("../../../../assets/fondnoiretbleu.jpg")}
                style={{ height: 200, width: null, flex: 1 }}
              />
          </CardItem>
          <CardItem cardBody>
            <Image
              style={styles.itemImage}
              source={require("../../../../assets/Fusajiro_Yamauchi.jpg")}
            />
          </CardItem>
          <CardItem>
           <Text>
               Girard Lucas
           </Text>
          </CardItem>
            <CardItem >
                <TouchableOpacity onPress={ () => Communication.phonecall (c.phone, true)}>
                     <Icon style={styles.icon}  name="phone"  type="entypo" color="white" backgroundColor="#00C829"  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Communication.text(c.phone)}>
                    <Icon style={styles.icon} name="message" type="entypo" color="white" backgroundColor="#FFBD00" />
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => Communication.email([c.email],null,null,'objet:','Bonjour')}>
                    <Icon style={styles.icon} name="email" type="entypo"  color="white" backgroundColor="#5794FA" />
                </TouchableOpacity>
            </CardItem>
        </Card>
      </Content>
      //   </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  itemText:{
      justifyContent: "center",
      alignItems: 'center',
  },

  itemImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "orange",
  },
   icon:{
      height:50,
      width: 50,
      borderRadius: 40,
      alignContent:'center',
      justifyContent: "center",
    },
  
});
AppRegistry.registerComponent('RNCommunications', () => RNCommunications);