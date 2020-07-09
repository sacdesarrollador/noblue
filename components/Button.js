import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

export default function Button({action, text, type}) {
  return type == 'default' ? (
    <TouchableWithoutFeedback onPress={action}>
      <View style={styles.containerDefault}>
        <Text style={styles.textDefault}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  ) : type == 'light' ? (
    <TouchableWithoutFeedback onPress={action}>
      <View style={styles.containerLight}>
        <Text style={styles.textLight}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  ) : null;
}

const styles = StyleSheet.create({
  containerDefault: {
    backgroundColor: '#D73F3D',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginVertical: 15,
    width: '35%',
    borderRadius: 18,
  },
  textDefault: {
    fontSize: 16,
    color: 'white',
  },
  containerLight: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginVertical: 15,
    width: '35%',
    borderRadius: 18,
    borderColor: '#D73F3D',
    borderWidth: 2,
  },
  textLight: {
    fontSize: 16,
    color: '#D73F3D',
  },
});
