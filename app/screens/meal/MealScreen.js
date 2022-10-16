import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function MealScreen(props) {
  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
      }}
    >
      <Text style={styles.date}>Oct 16, 2022</Text>
      <Text style={styles.title}>It's Dinner time!</Text>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-evenly",
        }}
      >
        <View style={styles.container}>
          <Text style={styles.choiceText}>Pasta.</Text>
        </View>
        <View>
          <Text style={{ marginTop: 100 }}>OR</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.choiceText}>
            Burrito from your fridge.
          </Text>
        </View>
      </View>
      <Text style={{ textAlign: 'center', bottom: "30%" }}>No, I don't want this.</Text>
      <View style={{ alignSelf: 'center', bottom: "28%" }}>
        <MaterialCommunityIcons name="cookie-refresh-outline" color={"black"} size={45} />

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 24,
    //backgroundColor: "#e45c54",
    //flexBasis: 100,
    //flexGrow: 1,
    height: "30%",
    width: "38%",
    marginTop: 30,
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 3,
    backgroundColor: "white",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    color: "#20232a",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  date: {
    marginTop: 16,
    paddingVertical: 8,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  choiceText: {
    color: "black",
    fontSize: 14,
  },
});

export default MealScreen;
