import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ListDataCustomer from "./ListDataCustomer";
import { db } from "../../../../components/Firebase/firebaseConfig";
import firebase from "firebase";

export default class ListCustomer extends Component {
  state = {
    customers: {},
    data: [],
    customerIds: [],
    // userUid: {},
  };

  componentDidMount() {
    let customerRef;
    let self = this;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        var userUid = user.uid;
        self.setState({ userUid });
        customerRef = db.ref("/compagny/" + userUid + "/customer");
      }

      customerRef.on("value", (snapshot) => {
        let data = snapshot.val();
        console.log(data);
        let customers = Object.values(data);
        const customerIds = Object.keys(data);

        self.setState({
          customers: customers,
          data: data,
          customerIds: customerIds,
        });
      });
    });
  }


  render() {
    return (
      <View style={styles.container}>
        {
            Object.keys(this.state.data).map((customerId, index) => {

              console.log(this.state.data[customerId]);
              return (
                <ListDataCustomer
                  key={index}
                  customer={this.state.data[customerId]}
                  navigation={this.props.navigation}
                  customerIds={customerId}
                />
              );
          //   })
          //   ) : (
          //   <Text>No items</Text>
          // )}
            } )
          }
          
            
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#ebebeb',
    marginTop: 50,
    flex: 0,
  },
});
