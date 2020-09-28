import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import TestphoneCall from "../TestComponent/TestPhoneCall";
import ListCustomer from "./ListCustomer";
import ListDataCustomer from "./ListDataCustomer";

export default function Customer() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text>Liste des clients</Text>
          <ListCustomer />
          <TestphoneCall />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    marginTop: 50,

  },
});
