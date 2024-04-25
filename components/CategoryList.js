import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import Colors from "../utilities/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const CategoryList = ({
  values,
  products,
  selectedBrand,
  setSelectedBrand,
}) => {
  const navigation = useNavigation();
  return (
    <View>
      {/* show Category */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 16,
          paddingRight: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 15,
          marginBottom: 5,
        }}
      >
        {values.map((value) => {
          return (
            <TouchableOpacity
              key={value}
              style={[
                styles.brandButtons,
                selectedBrand == value && styles.selectedBrandButton,
                { marginRight: 10 },
              ]}
              onPress={() => setSelectedBrand(value)}
            >
              <Text
                style={[
                  styles.brandLabel,
                  selectedBrand == value && styles.selectedBrandLabel,
                ]}
              >
                {value}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Show product */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 20 }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: 12,
            flexWrap: "wrap",
            justifyContent: "space-between",
            paddingHorizontal: 16,
          }}
        >
          {products.map((product, index) => {
            if (product.type == selectedBrand) {
              return (
                <TouchableOpacity
                  key={product.name}
                  style={styles.product}
                  onPress={() => {
                    navigation.navigate("Product", { index: index });
                  }}
                >
                  <MaterialIcons
                    name="favorite-border"
                    size={22}
                    color="black"
                    style={{
                      alignSelf: "flex-end",
                      marginTop: 0,
                      marginRight: 10,
                    }}
                  />
                  <Image
                    source={product.images[0]}
                    style={{ width: 160, height: 85, marginBottom: 15 }}
                  />
                  <View style={{ paddingLeft: 10 }}>
                    <Text
                      style={{
                        color: Colors.titleColor,
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      {product.name}
                    </Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "baseline" }}
                    >
                      <Text
                        style={{
                          color: Colors.textSecondary,
                          fontSize: 14,
                          fontWeight: "bold",
                        }}
                      >
                        ${product.price}
                      </Text>
                      <Text
                        style={{
                          color: Colors.textSecondary,
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                      >
                        .00
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    marginTop: 10,
    backgroundColor: Colors.background,
  },
  product: {
    backgroundColor: "#fff",
    paddingHorizontal: 7,
    paddingVertical: 18,
    borderRadius: 15,
    marginBottom: 15,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 3,
    //   height: 2,
    // },
    // shadowOpacity: 1.25,
    // shadowRadius: 0.84,
    elevation: 1,
  },

  brandButtons: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  selectedBrandButton: {
    backgroundColor: Colors.primary,
  },
  brandLabel: {
    color: "black",
  },
  selectedBrandLabel: {
    color: "#fff",
  },
});
