import { View, Text, Image, Share, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { DocumentDuplicateIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import { useDispatch } from "react-redux";
import { setInvite } from "../feature/inviteSlice";

const InviteCard = ({ title, description, image }) => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setInvite({
        title,
        description,
        image,
      })
    );
  }, [dispatch]);
 


  const onShare = async () => {
    try {
      const result = await Share.share({
        title: "Hey",
        message: "Check out this invite",
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
    <View
      className="rounded-md bg-white m-4 ml-0.5 p-2"
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
      <View>
        <Image
          className=" mb-2"
          style={{ height: 100, width: "100%", resizeMode: "cover" }}
          source={{
            uri: urlFor(image).url(),
          }}
        />
      </View>
      <View className="items-start w-64 ml-1">
        <Text className="font-bold">Invite on {title}</Text>
        <Text className="text-gray-500" ellipsizeMode="tail" numberOfLines={2}>
          {description}
        </Text>
      </View>
      <Text className="text-gray-500 my-3">Share This Code</Text>
      <View className="flex-row bg-gray-100 rounded-lg p-2 py-0">
        <Text className="font-bold flex-1 my-2">KQJS87</Text>
        <View style={{ width: 1 }} className=" bg-gray-300 mr-2"></View>
        <TouchableOpacity className="my-1.5">
          <DocumentDuplicateIcon size={24} color="#525151" />
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center space-x-5 m-2">
        <TouchableOpacity
          onPress={onShare}
          style={{ borderWidth: 0.8 }}
          className="text-red-600 p-1 rounded-md border-red-500"
        >
          <Text className="text-red-600 px-8 font-bold">Invite</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#ff3d3d] rounded-md p-1.5 px-8">
          <Text className="text-white font-bold">Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InviteCard;
