import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import InviteCard from "./InviteCard";
import sanityClient from "../sanity";



const InviteDiscount = () => {


const [title, setTitle] = useState([])
useEffect(() => {
  sanityClient.fetch(
    `
    *[_type == "invite"] {
      ...,
    }
  
  `)
  .then(data => {
    setTitle(data)
  }, [])

}, [])



  return(
    <View className="mt-5 ml-4">
      <Text className="font-semibold text-base">Invite Friends & Get Discount</Text>
      <ScrollView overScrollMode="never" horizontal
      showsHorizontalScrollIndicator={false}>

      {
        title?.map((item) => (
          <InviteCard
             key={item._id} 
             title={item.title} 
             description={item.description}
            image={item.image} />
        ))
      }
      </ScrollView>
    </View>
  )
}
export default InviteDiscount;
