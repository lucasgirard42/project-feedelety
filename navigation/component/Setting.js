import * as React from "react";
import { View, Text } from "react-native";
import AddCustomer from "./AddCustomer";



export default function Setting() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Ajouter un client</Text>
      <AddCustomer />
    </View>
  );
}
