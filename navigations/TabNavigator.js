import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";
import FavriteScreen from "../screens/FavriteScreen";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Wishlist"
        options={{
          title: "Wishlist",
          tabBarIcon: () => (
            <MaterialIcons name="favorite-border" size={24} color="black" />
          ),
        }}
        component={FavriteScreen}
      />
      <Tab.Screen
        name="Cart"
        options={{
          title: "Cart",
          tabBarIcon: () => (
            <Feather name="shopping-cart" size={24} color="black" />
          ),
        }}
        component={CartScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: () => (
            <FontAwesome5 name="user" size={24} color="black" />
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
