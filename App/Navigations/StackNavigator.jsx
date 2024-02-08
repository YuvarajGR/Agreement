import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../Components/Users/Login";
import SignUp from "../Components/Users/SignUp";
import Home from "../Screens/Home";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Signup" component={SignUp} options={{headerShown:false}} />
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />


    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default StackNavigator;
