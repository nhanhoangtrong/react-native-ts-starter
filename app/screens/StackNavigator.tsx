import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '@app/screens/home/HomeScreen';
import DetailsScreen from '@app/screens/login/LoginScreen';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Detail" component={DetailsScreen} />
  </Stack.Navigator>
);

export default StackNavigator;
