import { TouchableOpacity, Image, View, Text } from "react-native";
import React from "react";
import { PaperAirplaneIcon, StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon } from "react-native-heroicons/outline";
// import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../../sanity";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_descriptions,
  dishes,
  long,
  lat,
  delivery,
  discount,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("RestaurantScreen", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_descriptions,
          dishes,
          long,
          lat,
          delivery,
          discount,
        })
      }
      className="bg-white mr-3 mb-3 shadow rounded-md"
      style={{
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 2,
        shadowColor: "#36454F",
      }}
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-32 w-60 rounded-sm"
      />
      {discount && (
        <View className="absolute bg-green-700 rounded-r-full top-2 p-0.5 pr-1">
          <Text className="text-white text-xs font-bold"> {discount}</Text>
        </View>
      )}

      <View className=" p-2">
        {delivery && (
          <View
            style={{
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3,
              elevation: 2,
              shadowColor: "#36454F",
              left: 195,
            }}
            className="absolute flex-row -translate-y-1.5 bg-white rounded-l-full p-0.5 pl-1"
          >
            <PaperAirplaneIcon color="green" size={14} />
            <Text className="text-black text-xs font-bold">रु.{delivery}</Text>
          </View>
        )}

        <Text className="font-bold text-sm"> {title} </Text>
        <View className="flex-row items-center space-x-1.5">
          <StarIcon color="orange" size={18} />
          <Text className="text-black">{rating}</Text>
          <View
            style={{ width: 1 }}
            className=" bg-gray-300 mx-1 py-1.5"
          ></View>
          <Text className="text-s text-gray-500">{genre}</Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <LocationMarkerIcon color="grey" opacity={0.4} size={20} />
          <Text className="text-s text-gray-500">Nearby . {address} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
