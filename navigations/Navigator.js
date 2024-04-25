// In Navigator.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import SignupScreen from "../screens/auth/SignupScreen";
import Login from "../screens/Login";
import ProductScreen from "../screens/ProductScreen";
import Checkout from "../screens/Checkout";
import CartScreen from "../screens/CartScreen";
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Cart" component={CartScreen} />

        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
