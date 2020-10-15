import React, {Component} from "react";
import { View, Text,SafeAreaView, ScrollView, StyleSheet  } from "react-native";
import AddCustomer from "../Setting/Component/AddCustomer2";
import HomeScreen from "../../../components/Firebase/buttonSignOutSetting";



export default class Setting extends Component {
  render(){
  return (
    <View >
      <SafeAreaView >
        <ScrollView>
          <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: 'center'}}>Ajouter un client</Text>
          <HomeScreen />
          <AddCustomer />
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
    // alignItems:"center",
    // marginTop: 50,

  },
});