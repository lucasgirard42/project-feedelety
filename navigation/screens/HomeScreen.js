import React from "react";
import {View,StyleSheet,SafeAreaView,ScrollView, StatusBar} from "react-native";
import useStatusBar from "../../hooks/useStatusBar";
import { logout } from "../../components/Firebase/firebase"
import AddUserId from "../../navigation/View/Home/AddUserId";



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
      <StatusBar hidden={true} />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <AddUserId />
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
