import React, { Component } from "react";
import { Image, StyleSheet, TouchableOpacity, AppRegistry } from "react-native";
import {Content,Card,CardItem,Text,} from "native-base";
import Communication from 'react-native-communications';
import { Icon } from 'react-native-elements';
import  Colors  from "../../../../utils/colors";



export default class ProfilCustomer extends Component {
  constructor(props) {
    super(props);
  }
//   static navigationOptions = ({ navigation }) => {
//     return {
//         title: navigation.getParam('name'),
        
//     };
// };
 

  render() {
    // const { navigation } = this.props;
    // const c = this.props.customer;
    // const { navigate, state } = this.props.navigation.state;
    
    // console.log(itemId);
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
            <Image
              style={styles.itemImage}
              source={require("../../../../assets/Fusajiro_Yamauchi.jpg")}
            />
          </CardItem>
          <CardItem  style={styles.itemCardText}>
           <Text style={styles.itemText}>
           Girard lucas 
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
      </Content>
      //   </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    

  },
  
  imageCard:{
    position: "relative",
    
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
      
      
      
  },
  itemText:{
    
    color: Colors.primary,
    marginLeft: "50%",
    marginTop: "15%"
    
    
  },
  ItemCardIcon:{
    justifyContent:"space-between",
    marginTop: 20,
    
  },
  icon:{
     height:50,
     width: 50,
     borderRadius: 40,
    //  alignContent:'center',
     justifyContent: "center",
   },

  
});
AppRegistry.registerComponent('RNCommunications', () => RNCommunications);

