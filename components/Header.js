import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header({text}) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: '#D73F3D',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
