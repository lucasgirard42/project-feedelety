import React from "react";
import {View,StyleSheet} from "react-native";

import useStatusBar from "../../hooks/useStatusBar";
import { logout } from "./firebase";
import  Icon  from 'react-native-vector-icons/FontAwesome';



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
        <Icon style={styles.icon} size={50} name="sign-out"  color="blue" backgroundColor="black"  onPress={handleSignOut} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 2,
      position: 'relative',
      bottom:0
    },
    icon: {
      alignSelf: "flex-end",
    }
  });