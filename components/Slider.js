import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { useRef, useEffect, useState } from "react";
import { SliderList } from "../utilities/SliderList";

const Slider = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scrolling interval duration in milliseconds
  const scrollInterval = 3000; // Adjust as needed

  useEffect(() => {
    const scrollIntervalId = setInterval(() => {
      // Scroll to the next item
      flatListRef.current.scrollToIndex({
        animated: true,
        index: (currentIndex + 1) % SliderList.length,
      });
    }, scrollInterval);

    // Clean up the interval on component unmount
    return () => clearInterval(scrollIntervalId);
  }, [currentIndex]); // Add currentIndex as a dependency

  return (
    <View>
      <Text style={styles.heading}>SpecialForYou</Text>
      <FlatList
        ref={flatListRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={SliderList}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 10 }}>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
        // Key extractor function is required for FlatList
        keyExtractor={(item, index) => index.toString()}
        // Disable snapping for smoother auto-scrolling
        snapToInterval={270} // Adjust as needed
        decelerationRate="fast"
        // Calculate index dynamically for auto-scrolling
        onScroll={(event) => {
          const contentOffsetX = event.nativeEvent.contentOffset.x;
          const currentIndex = Math.round(contentOffsetX / 270);
          setCurrentIndex(currentIndex);
        }}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    width: 270,
    height: 150,
    borderRadius: 15,
    resizeMode: "contain", // Use resizeMode instead of objectFit
  },
});
