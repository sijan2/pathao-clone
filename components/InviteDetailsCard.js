import { View, Text, Image, Share, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { DocumentDuplicateIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";


const InviteDetailsCard = ({ title, description, image }) => {
 

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: "Hey",
        message:
          "Hey, I am using this app to find the best deals in the city. Download it now and get 10% off on your first purchase. https://play.google.com/store/apps/details?id=com.dealz.dealz",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View className='px-3'>
      
        <Image
          className=" mb-2"
          style={{ height: 150, width: "100%", resizeMode: "contain" }}
          source={{
            uri: urlFor(image).url(),
          }}
        />
    
      <View className="items-start">
        <Text className="font-bold">Invite on {title}</Text>
        <Text className="text-gray-500">{description}</Text>
      </View>
      <Text className="text-gray-500 my-3">Share This Code</Text>

      <View className="flex-row items-center space-x-5">
        <View className="flex-row bg-gray-100 rounded-lg p-2 py-0 flex-1">
          <Text className="font-bold flex-1 m-2">KQJS87</Text>
          <View style={{ width: 1 }} className=" bg-gray-300 mr-2"></View>
          <TouchableOpacity className="my-1.5">
            <DocumentDuplicateIcon size={24} color="#525151" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={onShare}
          className="bg-red-600 p-2 px-3 rounded-md"
        >
          <Text className="text-white px-8 font-bold">Invite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InviteDetailsCard;
