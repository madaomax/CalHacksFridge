import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Component imports
import TestScreen from './app/screens/TestScreen';
import MealScreen from './app/screens/meal/MealScreen';


const Tab = createBottomTabNavigator();


// const Stack = createNativeStackNavigator();


export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Meal">
    //     <Stack.Screen
    //       name="Meal"
    //       component={MealScreen}
    //       options={{ title: 'Eat!'}}
    //     />
    //     <Stack.Screen name="Test" component={TestScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={MealScreen} />
      <Tab.Screen name="Test" component={TestScreen} />
    </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
