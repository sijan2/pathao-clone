import React from "react";
import { View, Text, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const CarouselItem = ({ imgUrl }) => {
  return (
    <View className="rounded-md m-2 ml-0">
      <Image
        style={{ width: width * 0.65 }}
        className="h-28 rounded-lg"
        resizeMode="cover"
        source={{ uri: imgUrl }}
      />
    </View>
  );
};

export default CarouselItem;
