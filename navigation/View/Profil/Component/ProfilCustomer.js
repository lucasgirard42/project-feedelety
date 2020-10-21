import React, { Component } from "react";
import { Image, StyleSheet, TouchableOpacity, AppRegistry, Dimensions } from "react-native";
import {Content,Card,CardItem,Text,} from "native-base";
import Communication from 'react-native-communications';
import { Icon } from 'react-native-elements';
import  Colors  from "../../../../utils/colors";
import MapView from 'react-native-maps';



export default class ProfilCustomer extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    
    const c = this.props.route.params;

    return (
      <Content>
        <Card style={styles.container}>
          <CardItem style={styles.imageCard}>
            <Image
              style={styles.itemImage}
              source={{uri: c.image}}
            />
          </CardItem>
          <CardItem  style={styles.itemCardText}>
           <Text style={styles.itemText}>
             {c.lastname} {c.firstname}
           </Text>
          </CardItem>
            <CardItem style={styles.ItemCardIcon} >
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
        <Card>
          <CardItem>
            <Icon  name="phone"  type="entypo" color="black" color="#00C829"   />
            <Text>
              mobile : {c.phone}
            </Text>
          </CardItem>
          <CardItem>
            <Icon  name="email" type="entypo"  color="white" color="#5794FA" />
            <Text>
             email : {c.email}
            </Text>
          </CardItem>
        </Card>
        <Card style={styles.map}>
            <MapView  style={styles.mapStyle} />
        </Card>
      </Content>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
  },
  
  imageCard:{
    position: "relative",
    backgroundColor: "black",
    height: 230,
    width: null,
    flex:1
  },
  
  itemImage: {
    position: "absolute",
    width: 150,
    height: 150,
    top: "50%",
    left: "32%",
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth:5,
    borderColor: "white",
  },

  itemCardText:{
    flex:1,
    display:"flex",
      position: "absolute",
      backgroundColor: "transparent",
      alignSelf:"center",
      paddingBottom: 200,
  },

  itemText:{
    color: Colors.primary,
  },

  ItemCardIcon:{
    justifyContent:"space-between",
    marginTop: 20,
  },

  icon:{
     height:50,
     width: 50,
     borderRadius: 40,
     justifyContent: "center",
   },
   mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  map:{
    // width: 100,
    height: 300,
  }

  
});
AppRegistry.registerComponent('RNCommunications', () => RNCommunications);

