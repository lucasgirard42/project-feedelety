import * as React from "react";
import { View, Text } from "react-native";
import AddCustomer from "../Setting/Component/AddCustomer";
import HomeScreen from "../../../components/Firebase/buttonSignOutSetting"



export default function Setting() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: 'center'}}>Ajouter un client</Text>
      <HomeScreen />
      <AddCustomer />
    </View>
  );
}


