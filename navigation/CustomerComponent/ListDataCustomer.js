import React, { Component } from 'react';
import { View, Text, StyleSheet,AppRegistry,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

 import { Avatar, Icon} from 'react-native-elements';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";;
import { Thumbnail, List, ListItem, Separator } from 'native-base';




export default class ListDataCustomer extends Component {
  static propTypes = {
    customer: PropTypes.array.isRequired
  };
  render() {
    return (
      <View >
        {this.props.customer.map((customer, index) => {
         let phone = customer.phone;
         let email = customer.email;
        //  console.log(email);
        
          return (
            
              <View>
                  <Collapse style={{borderBottomWidth:1,borderTopWidth:1}}>
                    <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
                      <View style={{width:'25%',alignItems:'center'}}>
                        <Thumbnail source={{uri: 'https://www.biography.com/.image/t_share/MTQ3NjYxMzk4NjkwNzY4NDkz/muhammad_ali_photo_by_stanley_weston_archive_photos_getty_482857506.jpg'}} />
                      </View>
                      <View style={{width:'60%'}}>
                        <Text>Name : Mohammed Ali Kley</Text>
                        <Text>Profession: Boxer</Text>
                      </View>
                    </CollapseHeader>
                    <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED'}}>
                      <Collapse style={{flexDirection:'row'}}>
                        <CollapseHeader>
                          <Thumbnail source={{uri: 'https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Phone-512.png'}} />
                        </CollapseHeader>
                        <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
                          <Text>+1 310 346 0018</Text>
                        </CollapseBody>
                      </Collapse>
                      <Collapse style={{flexDirection:'row'}}>
                        <CollapseHeader>
                          <Thumbnail source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1674-200.png'}} />
                        </CollapseHeader>
                        <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
                          <Text>sample@sample.ma</Text>
                        </CollapseBody>
                      </Collapse>
                    </CollapseBody>
                  </Collapse>
                </View>
            
            
            
            
            
            
            // <ListItem  key={index} bottomDivider>
            //   <Avatar rounded source={{uri:customer.image,}}/>
            //   <ListItem.Title style={styles.cool}  >{customer.lastname} {customer.firstname}  
            //     <TouchableOpacity onPress={ () => Communication.phonecall (phone, true)}>
            //       <Icon style={styles.icon}  name="phone"  type="entypo" color="white" backgroundColor="#00C829"  />
            //     </TouchableOpacity>
            //     <TouchableOpacity onPress={() => Communication.text(phone)}>
            //       <Icon style={styles.icon} name="message" type="entypo" color="white" backgroundColor="#FFBD00" />
            //     </TouchableOpacity>
            //     <TouchableOpacity onPress={ () => Communication.email([email],null,null,'objet:','Bonjour')}>
            //       <Icon style={styles.icon} name="email" type="entypo"  color="white" backgroundColor="#5794FA" />
            //     </TouchableOpacity>
            //     <TouchableOpacity onPress={ () => Communication.email([email],null,null,'objet:','Bonjour')}>
            //       <Icon style={styles.icon} name="info" type="entypo"  color="white" backgroundColor="black" />
            //     </TouchableOpacity>
            //   </ListItem.Title>
              /* <Text style={styles.itemtext}>{customer.firstname}</Text>
              <Text style={styles.itemtext}>{customer.lastname}</Text>
              <Text style={styles.itemtext}>{customer.email}</Text>
              <Text style={styles.itemtext}>{customer.address}</Text> 
            <Text style={styles.itemtext}>{customer.phone}</Text> */
              
              
              
            /* </ListItem> */
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cool: {
    alignContent:'center',
    justifyContent: "space-between",
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
  