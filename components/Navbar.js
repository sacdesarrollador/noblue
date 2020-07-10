import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Init from '../screens/Init';
import Signup from '../screens/Signin';
import Profile from '../screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
const Tab = createMaterialBottomTabNavigator();
export default function Navbar() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Profile} />
        <Tab.Screen name="Settings" component={Signup} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
