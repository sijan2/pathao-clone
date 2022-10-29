import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import HistoryScreen from "../screens/HistoryScreen";
import OffersScreen from "../screens/OffersScreen";
import {
  ReceiptTaxIcon,
  ViewGridIcon,
  ClipboardListIcon,
} from "react-native-heroicons/solid";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3,
          elevation: 2,
          left: 40,
          right: 50,
          shadowColor: "#36454F",
          paddingHorizontal: 20,
          borderRadius: 90,
          
          backgroundColor: "#fff",
        },
      }}
    >
      <Tab.Screen
        name="Offer"
        component={OffersScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#ffc9c9" : "#fff",
              }}
              className="flex-row rounded-full px-2 py-1 space-x-1"
            >
              <ReceiptTaxIcon size={20} color={focused ? "red" : "gray"} />
              <Text
                style={{
                  color: focused ? "red" : "gray",
                  fontWeight: focused ? "bold" : "normal",
                }}
              >
                Offers
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#fad1d0" : "#fff",
              }}
              className="flex-row rounded-full px-2 py-1 space-x-1"
            >
              <ViewGridIcon size={20} color={focused ? "red" : "gray"} />
              <Text
                style={{
                  color: focused ? "red" : "gray",
                  fontWeight: focused ? "bold" : "normal",
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#fad1d0" : "#fff",
              }}
              className="flex-row rounded-full ml-1 px-2 py-1 space-x-1"
            >
              <ClipboardListIcon size={20} color={focused ? "red" : "gray"} />
              <Text
                style={{
                  color: focused ? "red" : "gray",
                  fontWeight: focused ? "bold" : "normal",
                }}
              >
                History
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
