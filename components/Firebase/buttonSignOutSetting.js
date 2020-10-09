import React from "react";
import {View,StyleSheet,Text,SafeAreaView,ScrollView,} from "react-native";

import useStatusBar from "../../hooks/useStatusBar";
import { logout } from "./firebase";
import { Button } from "react-native-elements";
import Constant from "expo-constants";


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
        <Button title="Sign Out" onPress={handleSignOut} />
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 2,
      position: 'absolute',
      bottom:0
    },
  });