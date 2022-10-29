import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
  ChevronDownIcon,
} from "react-native-heroicons/outline";
import {
  HeartIcon,
  LocationMarkerIcon,
  ReceiptRefundIcon,
  ViewGridIcon,
} from "react-native-heroicons/solid";
import Categories from "../../components/pathaofoodcomponents/Categories";
import Carousel from "../../components/pathaofoodcomponents/Carousel";
import { useNavigation } from "@react-navigation/native";
import FeaturedRow from "../../components/pathaofoodcomponents/FeaturedRow";
import RestaurantCard from "../../components/pathaofoodcomponents/RestaurantCard";
import sanityClient from "../../sanity";

const FoodHomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured"]| {
      ...,
      restaurants[] ->{
        ...,
        dishes[] ->
      },
      
    }
    
    `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white pt-2">
      {/* Header */}

      <View className="flex-row items-center pb-2 space-x-2 mx-4 mt-2">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ViewGridIcon size={24} color="#9e9e9e" />
        </TouchableOpacity>
        <View className="flex-1 flex-row space-x-2">
          <LocationMarkerIcon size={18} color="#9E9E9E" />

          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className="text-sm text-gray-600"
          >
            Kumari Mandir, Tushal, Bou..
          </Text>
          <ChevronDownIcon size={20} color="gray" />
        </View>
        <TouchableOpacity>
          <ReceiptRefundIcon size={21} color="#71797E" />
        </TouchableOpacity>
      </View>

      {/* Search Box */}

      <View className="flex-row items-center pb-3 space-x-2 mr-4 mt-2 px-4">
        <TouchableOpacity
          style={{ borderWidth: 0.9 }}
          className="flex-row  flex-1 space-x-2 border-gray-300 p-2 rounded-md mr-3"
        >
          <SearchIcon size={23} color="red" />
          <Text className="text-gray-400 text-sm pt-0.5 flex-1">
            Search foods or restaurant
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="border-gray-300 rounded-md px-1 py-1.5"
          style={{ borderWidth: 0.9 }}
        >
          <AdjustmentsIcon
            style={{ transform: [{ rotate: "270deg" }] }}
            size={25}
            color="gray"
          />
        </TouchableOpacity>
        <TouchableOpacity
          className="border-gray-300 rounded-md px-1 py-1.5"
          style={{ borderWidth: 0.9 }}
        >
          <HeartIcon size={25} color="#71797E" />
        </TouchableOpacity>
      </View>

      {/* body*/}

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Carousel />
        {/* Categories */}
        <Categories />
        {/* Featured View*/}
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FoodHomeScreen;
