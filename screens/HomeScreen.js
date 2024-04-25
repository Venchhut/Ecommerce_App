import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import TopNavigation from "../components/TopNavigation";
import Colors from "../utilities/Colors";
import SearchBar from "../components/SearchBar";
import Slider from "../components/Slider";
import CategoryList from "../components/CategoryList";
import Products from "../utilities/database";

const HomeScreen = (navigation) => {
  const [brand, setBrand] = useState("Nike");
  return (
    <View>
      <View style={styles.container}>
        {/* Top navigation */}
        <TopNavigation />
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 24 }}
        >
          {/* Search bar */}
          <SearchBar />
          {/* Filter icon */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              backgroundColor: Colors.background,
              padding: 10,
              borderRadius: 12,
            }}
          >
            <Ionicons
              name="filter-circle-outline"
              size={24}
              color={Colors.primary}
            />
          </View>
        </View>
      </View>
      <View style={{ padding: 20 }}>
        <Slider />
      </View>
      {/* Categories list */}
      <CategoryList
        values={["Nike", "Puma", "Adidas", "New Balance"]}
        selectedBrand={brand}
        setSelectedBrand={setBrand}
        navigation={navigation}
        products={Products}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    padding: 25,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  appBarWraper: {},
});
