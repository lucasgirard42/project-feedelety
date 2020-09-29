import React from "react";
import {View,StyleSheet,Button,Text,SafeAreaView,ScrollView,} from "react-native";

import useStatusBar from "../hooks/useStatusBar";
import { logout } from "../components/Firebase/firebase"
import Constant from "expo-constants";
import AddUser from "../navigation/HomeScreenComponent/AddUser";
import firebase  from 'firebase';
import TestUserId from "../navigation/TestComponent/TestUserId";




export default function HomeScreen() {
  useStatusBar("dark-content");
  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text>coucou</Text>
          {/* <AddUser/> */}
          <TestUserId />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
