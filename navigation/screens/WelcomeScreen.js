import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import AppButton from '../../components/AppButton';
import Colors from '../../utils/colors';
import useStatusBar from '../../hooks/useStatusBar';


export default function WelcomeScreen({ navigation }) {
  useStatusBar('light-content');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/flame.png')} style={styles.logo} />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Se connecter" onPress={() => navigation.navigate('Login')} />
        <AppButton
          title="S'inscrire"
          color="secondary"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  logoContainer: {
    position: 'absolute',
    top: 60,
    alignItems: 'center'
  },
  logo: {
    width: 300,
    height: 125
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
    paddingVertical: 20,
    color: Colors.primary
  },
  buttonContainer: {
    padding: 20,
    paddingBottom: 60,
    width: '100%'
  }
});