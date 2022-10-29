import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronRightIcon,
  LocationMarkerIcon,
  BriefcaseIcon,
  HomeIcon,
} from "react-native-heroicons/solid";

import { FlatGrid } from "react-native-super-grid";
import FeaturedStories from "../components/FeaturedStories";
import InviteDiscount from "../components/InviteDiscount";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useCallback, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectInvite } from "../feature/inviteSlice";
import { urlFor } from "../sanity";

import InviteCard from "../components/InviteCard";
import InviteDetailsCard from "../components/InviteDetailsCard";
import BottomSheet from "../components/BottomSheet";

const HomeScreen = () => {

 // const [isOpen, setIsOpen] = useState(true);

  const data = [
    {
      id: 1,
      title: "Bike",
      image: "https://i.ibb.co/BGHG5xy/byke.png",
      screen: "BikeScreen",
    },
    {
      id: 2,
      title: "Car",
      image: "https://i.ibb.co/M9Y9kYm/car.png",
      screen: "CarScreen",
    },
    {
      id: 3,
      title: "Food",
      image: "https://i.ibb.co/hByx1PF/vectorstock-21192719.png",
      screen: "FoodHomeScreen",
    },
    {
      id: 4,
      title: "Bazaar",
      image: "https://i.ibb.co/WsWQnK4/1-YO9-N1-Nh-Eo28v-Bg9-QJm6-Fg-A.jpg",
      screen: "BazaarScreen",
    },
  ];

  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-gray-50 flex-1">
      <StatusBar style="dark" />
      <View className="flex-row px-2 space-x-2 items-center">
        <LocationMarkerIcon size={18} color="#9E9E9E" />
        <View className="flex-row flex-1 items-center">
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className="text-xs text-gray-600"
          >
            Kumari Mandir, Tushal, Bou..
          </Text>
          <ChevronRightIcon size={20} color="#9E9E9E" />
        </View>
        <TouchableOpacity onPress={ () => navigation.navigate("AccountScreen") } >
          <Image
            className="rounded-full h-8 w-8"
            source={require("../assets/images/profile.jpg")}
          />
        </TouchableOpacity>
      </View>

      <View>
        <FlatGrid
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.screen)}
              style={{
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3,
                elevation: 4,
                shadowColor: "#36454F",
              }}
              className="items-center top-1 bg-white rounded-lg px-0 pb-2"
            >
              <Image
                style={{ resizeMode: "contain" }}
                className="h-14 w-16 rounded-sm"
                source={{ uri: item.image }}
              />
              <Text className="text-xs text-gray-600">{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
        {/* overscroll mode fix the color fading effect on android */}
        {/* story section */}
        <FeaturedStories />

        {/* Set Home address and Work address view */}
        <View className="mt-6 ml-4 mr-2.5">
          <Text className="font-semibold text-base mb-4">Take a ride to</Text>
          <View className="bg-slate-100 flex-row p-2 items-center space-x-3 rounded-md">
            <View className="bg-white rounded-full p-1.5">
              <HomeIcon size={18} color="gray" />
            </View>
            <View className="mr-10">
              <Text className="text-sm font-semibold">Home</Text>
              <Text className="text-xs text-gray-600">Set Address</Text>
            </View>

            <View style={{ width: 1 }} className=" bg-gray-300  py-4"></View>

            <View className="bg-white rounded-full p-1.5">
              <BriefcaseIcon size={18} color="gray" />
            </View>
            <View>
              <Text className="text-sm font-semibold">Work</Text>
              <Text className="text-xs text-gray-600">Set Address</Text>
            </View>
          </View>
        </View>

        {/* Invite View */}
        <View className="pb-24">
          {/*added bottom padding which fix the view blocked by bottom floating tab  */}
          <InviteDiscount />
        </View>
      </ScrollView>

      {/* Bottom Sheet Modal */}
      <BottomSheet 
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
