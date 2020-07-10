import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../components/Button';
export default function Init({navigation}) {
  return (
    <>
      <View style={styles.containerBottom}>
        <Button
          action={() => navigation.navigate('Signin')}
          text="Sign In"
          type="default"
        />
        <Button
          action={() => navigation.navigate('Signup')}
          text="Sign Up"
          type="light"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerTop: {
    flex: 2,
    backgroundColor: '#fff',
    borderColor: '#D73F3D99',
    borderWidth: 3,
  },

  containerBottom: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#DE6363',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
