import React from 'react';
import {StatusBar, StyleSheet, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Init from './screens/Init';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Profile from './screens/Profile';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#D73F3Dcc" />
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Init} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
