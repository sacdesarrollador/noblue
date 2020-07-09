import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function Card({jsx}) {
  return (
    <View style={styles.container}>
      {jsx}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 25,
    alignItems: 'center',
    width: '85%',
  },
});
