import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header({text}) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18, color: '#D73F3D', fontWeight: 'bold'}}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
