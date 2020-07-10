import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function Card({jsx}) {
  return <View style={styles.container}>{jsx}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: 30,
    paddingVertical: 30,
    alignItems: 'center',
    width: '85%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
