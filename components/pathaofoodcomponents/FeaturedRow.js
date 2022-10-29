import { View, Text, ScrollView } from "react-native";
import React, {useEffect, useState} from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
  *[_type=="featured" && _id == $id]| {
    ...,
    restaurants[] ->{
      ...,
      dishes[] ->,
       genre -> {
         name
       },
    },
    
  }[0]

  `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, [id]);

 
  return (
    <View className='m-2 ml-0 mt-0'>
      <View className="flex-row items-center justify-between px-4 mt-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#9e9e9e" />
      </View>
      <Text className="text-xs text-gray-500 px-4"> {description} </Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurants Card */}
        {restaurants?.map( restaurants => (

          <RestaurantCard
          key={restaurants._id}
          id={restaurants._id}
          imgUrl={restaurants.image}
          title={restaurants.name}
          rating={restaurants.rating}
          genre={restaurants.genre?.name}
          address={restaurants.address}
          short_descriptions={restaurants.short_descriptions}
          dishes={restaurants.dishes}
          long={restaurants.long}
          lat={restaurants.lat}
          delivery={restaurants.delivery}
          discount={restaurants.discount}
        />

        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
