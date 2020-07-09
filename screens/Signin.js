import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Form from '../components/Form';
import Header from '../components/Header';
import Card from '../components/Card';
export default function Signin() {
  return (
    <>
      <Header text="Sign In" />
      <SafeAreaView style={{flex:1}}>
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.logo}>
              <Text style={styles.text}>My Time</Text>
            </View>
            <Card jsx={<Form type="signin" />} />
          </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor: '#DE6363',
    paddingVertical: 10,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DE6363',
    paddingVertical: 10,
    minHeight: 100,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
  },
});
