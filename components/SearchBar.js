// SearchBar.js

import React from "react";
import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import Colors from "../utilities/Colors";

const SearchBar = () => {
  return (
    <View
      style={{
        flex: 4,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f6f6f6",
        padding: 10,
        marginRight: 15,
        borderRadius: 12,
      }}
    >
      <Feather
        name="search"
        size={24}
        color={Colors.primary}
        style={{ paddingHorizontal: 10 }}
      />
      <TextInput placeholder="Search" style={{ marginRight: 40 }} />
    </View>
  );
};

export default SearchBar;
