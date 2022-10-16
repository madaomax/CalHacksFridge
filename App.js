import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './app/screens/Profile';
import TestScreen from './app/screens/TestScreen';
import FoodChoice from './app/screens/FoodChoice';

export default function App() {
  return <FoodChoice />;
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
