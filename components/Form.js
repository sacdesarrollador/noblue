import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import Button from './Button';
import Card from './Card';
const Form = ({type}) => {
  return type == 'signin' ? (
    <>
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} />
      <Button text="Sign In" type="default" />
      <View>
        <Text style={styles.text}>Did you forget the password?</Text>
      </View>
    </>
  ) : type === 'signup' ? (
    <>
      <TextInput
        selectionColor="#fff"
        autoCompleteType="email"
        placeholder="Email"
        style={styles.input}
        textContentType="emailAddress"
      />
      <TextInput
        autoCompleteType="username"
        placeholder="Username"
        style={styles.input}
        textContentType="username"
      />
      <TextInput
        autoCompleteType="password"
        placeholder="Password"
        style={styles.input}
        textContentType="newPassword"
      />
      <TextInput
        autoCompleteType="password"
        placeholder="Repeat password"
        style={styles.input}
      />
      <Button text="Sign Up" type="default" />
    </>
  ) : null;
};
export default Form;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 0.8,
    marginVertical: 5,
    width: 200,
    borderColor: '#aaa',
    backgroundColor: '#fff',
    fontSize: 14,
    height: 40,
    paddingBottom: 0
  },
  text: {
    color: '#000',
  },
});
