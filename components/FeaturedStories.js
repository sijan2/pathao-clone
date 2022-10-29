import { View, ScrollView, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const FeaturedStories = () => {
const data = [
    {
        id: 1,
        image: "https://i.ibb.co/xYPgpqy/nn.jpg"
    },
    {
        id: 2,
        image: "https://i.ibb.co/Pjbqvy2/mmm.jpg"
    },
    {
        id: 3,
        image: "https://i.ibb.co/Pjbqvy2/mmm.jpg"
    },
    {
        id: 4,
        image: "https://i.ibb.co/LzZ6xWV/pathaoooo.jpg"
    },
    {
        id: 5,
        image: "https://i.ibb.co/LzZ6xWV/pathaoooo.jpg"
    },
    {
      id: 4,
      image: "https://i.ibb.co/LzZ6xWV/pathaoooo.jpg"
  },
  {
      id: 5,
      image: "https://i.ibb.co/LzZ6xWV/pathaoooo.jpg"
  }
    

]

  return (
    <ScrollView overScrollMode="never" horizontal={true} showsHorizontalScrollIndicator={false}>

    {data.map((item, index) =>(
        <View className="flex-row ml-2 
        mt-3" key={index}>
        <LinearGradient
        colors={["#e95950", "#fccc63"]}
        className="rounded-full "
        style={{padding: 2.5}}
        >
          <Image
            source={{
              uri: item.image,
            }}
            style={{ width: 76, height: 76, borderColor:"#fff", borderWidth:3 }}
            className="rounded-full "
          />
        </LinearGradient>
      </View>

    )) }
      
    </ScrollView>
  );
};

export default FeaturedStories;
