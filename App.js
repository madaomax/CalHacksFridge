import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Component imports
import TestScreen from "./app/screens/TestScreen";
import MealScreen from "./app/screens/meal/MealScreen";
import FridgeScreen from "./app/screens/fridge/FridgeScreen";
import FoodChoice from "./app/screens/profile/FoodChoice";
import Profile from "./app/screens/profile/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="What to eat?"
          component={MealScreen}
          options={{
            tabBarLabel: "Your Meal",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="noodles"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Your Fridge"
          component={FridgeScreen}
          options={{
            tabBarLabel: "Your fridge",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="fridge" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "foodie profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="emoticon-tongue"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
