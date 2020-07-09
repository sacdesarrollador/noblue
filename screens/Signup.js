import React from 'react';
import {StyleSheet, View, KeyboardAvoidingView, ScrollView} from 'react-native';
import Form from '../components/Form';
import Header from '../components/Header';
import Card from '../components/Card';

export default function Signup() {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.logo} />
      <View style={styles.container}>
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
          <Card jsx={<Form type="signup" />} />
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DE6363',
  },
  logo: {
    alignItems: 'center',
    backgroundColor: '#DE6363',
    paddingVertical: 80,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
  },
});
