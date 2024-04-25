// TopNavigation.js

import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../utilities/Colors";

const TopNavigation = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 25,
        marginLeft: 0,
        marginRight: 0,
      }}
    >
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => navigation.navigate("Location")}
      >
        <Ionicons name="location-outline" size={24} color={Colors.background} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => navigation.navigate("Notification")}
      >
        <Ionicons
          name="notifications-outline"
          size={24}
          color={Colors.background}
          style={{ alignSelf: "flex-end" }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TopNavigation;
