import React from 'react';
import {StyleSheet, View} from 'react-native';
import Form from '../components/Form';
import Header from '../components/Header';
import Card from '../components/Card';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function Signup() {
  return (
    <View style={styles.container}>
      <Header text="Sign Up" />
      <KeyboardAwareScrollView>
        <View style={styles.logo} />
        <Card jsx={<Form type="signup" />} />
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DE6363',
  },
  logo: {
    alignItems: 'center',
    backgroundColor: '#000',
    minHeight: 180,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
  },
});
