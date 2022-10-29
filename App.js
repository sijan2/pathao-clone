import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";
import BottomTab from "./components/BottomTab";
import FoodHomeScreen from "./screens/pathaofood/FoodHomeScreen";
import BikeScreen from "./screens/pathaoride/BikeScreen";
import CarScreen from "./screens/pathaoride/CarScreen";
import BazaarScreen from "./screens/pathaobazaar/BazaarScreen";
import AccountScreen from "./screens/AccountScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RestaurantScreen from "./screens/pathaofood/RestaurantScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <TailwindProvider>
          <BottomSheetModalProvider>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="Home1"
                  component={BottomTab}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="FoodHomeScreen"
                  options={{ headerShown: false }}
                  component={FoodHomeScreen}
                />
                <Stack.Screen
                  name="BikeScreen"
                  options={{ headerShown: false }}
                  component={BikeScreen}
                />
                <Stack.Screen
                  name="CarScreen"
                  options={{ headerShown: false }}
                  component={CarScreen}
                />
                <Stack.Screen
                  name="BazaarScreen"
                  options={{ headerShown: false }}
                  component={BazaarScreen}
                />
                <Stack.Screen
                  name="AccountScreen"
                  options={{ headerShown: false }}
                  component={AccountScreen}
                />
                <Stack.Screen
                  name="RestaurantScreen"
                  options={{ headerShown: false }}
                  component={RestaurantScreen}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </BottomSheetModalProvider>
        </TailwindProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}
