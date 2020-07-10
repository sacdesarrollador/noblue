import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import Button from './Button';
import Card from './Card';
const Form = ({type, navigation}) => {
  console.log(navigation)
  return type == 'signin' ? (
    <>
      <TextInput
        placeholder="Username"
        style={styles.input}
        selectionColor="#DE6363"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        selectionColor="#DE6363"
        secureTextEntry={true}
      />
      <Button
        text="Sign In"
        type="default"
        action={() => navigation.navigate('Profile')}
      />
      <View>
        <Text style={styles.text}>Did you forget the password?</Text>
      </View>
    </>
  ) : type === 'signup' ? (
    <>
      <TextInput
        selectionColor="#DE6363"
        placeholder="Email"
        style={styles.input}
        textContentType="emailAddress"
      />
      <TextInput
        placeholder="Username"
        style={styles.input}
        textContentType="username"
        selectionColor="#DE6363"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        textContentType="newPassword"
        selectionColor="#DE6363"
        secureTextEntry={true}
      />
      <TextInput
        placeholder="Repeat password"
        style={styles.input}
        selectionColor="#DE6363"
        secureTextEntry={true}
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
    paddingBottom: 0,
  },
  text: {
    color: '#000',
  },
});
