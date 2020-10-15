import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import ListCustomer from "./Component/ListCustomer";

export default class Customer extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.text}>Liste des clients</Text>
            <ListCustomer navigation={this.props.navigation} />
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
  
  },
});