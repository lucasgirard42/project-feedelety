import * as React from "react";
import { View, Text } from "react-native";
import ListCustomer from "./ListCustomer";

export default function Customer() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Liste des clients</Text>
        <ListCustomer />
      </View>
    );
  }