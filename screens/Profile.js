import React from 'react';
import {View, StyleSheet} from 'react-native';
import Navbar from '../components/Navbar';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
