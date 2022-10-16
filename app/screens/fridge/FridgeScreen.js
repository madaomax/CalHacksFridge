import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import Menu from "./Menu.js";

function FridgeScreen(props) {
  const [data, add_row] = useState([
    {
      id: "id",
      name: "Name",
      expirationDate: "Days Remaining",
      showTrash: false,
      servings: "Servings",
    },
  ]);
  const [test, update_test] = useState(1);
  const [addBoxState, update_addBoxState] = useState(false);
  const [food, onChangeFood] = useState("Beef");
  const [date, onChangeDate] = useState(0);
  const [serving, onChangeServing] = useState(0);
  //const [listHeight, changeListHeight] = useState(25);
  const defaultAddServings = {
    beef: 10,
    egg: 1,
    chicken: 5,
    apple: 3,
    pumpkin: 7,
  };
  const defaultDays = {
    beef: 10,
    egg: 1,
    chicken: 5,
    apple: 3,
    pumpkin: 7,
  };

  let currentStorage = {};

  const addNewItem = () => {
    let newState = data.map((obj) => {
      return obj;
    });
    if (isNaN(date)) {
      alert("Days to expire has to be a number");
      return;
    }
    if (isNaN(serving)) {
      alert("Servings has to be a number");
      return;
    }
    if (serving == 0) {
      if (food.toLocaleLowerCase() in defaultAddServings) {
        tempServing = defaultAddServings[food.toLowerCase()];
      } else {
        alert("There is no default servings for this item");
        return;
      }
    } else {
      tempServing = serving;
    }

    if (date == 0) {
      if (food.toLocaleLowerCase() in defaultDays) {
        tempDay = defaultDays[food.toLowerCase()];
      } else {
        alert("There is no default expiration days for this item");
        return;
      }
    } else {
      tempDay = date;
    }

    if (food.toLocaleLowerCase() in currentStorage) {
      currentStorage[food.toLowerCase()] += serving;
    } else {
      currentStorage[food.toLowerCase()] = serving;
    }

    newState.push({
      id: test,
      name: food,
      expirationDate: tempDay,
      showTrash: true,
      servings: tempServing,
    });
    let newState2 = [...newState].sort(
      (a, b) => a.expirationDate - b.expirationDate
    );
    let newState3 = [];
    for (var i = 0; i < newState2.length; i++) {
      newState3.push({
        id: i,
        name: newState2[i].name,
        expirationDate: newState2[i].expirationDate,
        showTrash: newState2[i].showTrash,
        servings: newState2[i].servings,
      });
    }

    newState3[0].id = "id";
    newState3[0].servings = "Servings";
    console.log(newState3);
    add_row(newState3);

    console.log(data);
    update_test(test + 1);
  };
  const deleteItem = (id) => {
    let newState = [];
    for (var i = 0; i < data.length; i++) {
      console.log(i);
      console.log(data[i]);
      if (id == i) {
        continue;
      }
      newState.push(data[i]);
    }
    let newState2 = [];
    for (var i = 0; i < newState.length; i++) {
      newState2.push({
        id: i,
        name: newState[i].name,
        expirationDate: newState[i].expirationDate,
        showTrash: newState[i].showTrash,
        servings: newState[i].servings,
      });
    }
    newState2[0].id = "id";
    add_row(newState2);
  };
  const showAddBox = () => {
    update_addBoxState(!addBoxState);
  };

  return <Menu currentStorage={currentStorage}> </Menu>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: "5%",
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
  },
  f_item: {
    backgroundColor: "#ffe4c4",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
    width: "95%",
    height: "70%",
  },
  first_column: {
    width: "10%",
    backgroundColor: "lightyellow",
  },
  second_column: {
    width: "25%",
    backgroundColor: "lightpink",
  },
  third_column: {
    width: "35%",
    backgroundColor: "lavender",
  },
  forth_column: {
    width: "20%",
    backgroundColor: "bisque",
    alignItems: "center",
    justifyContent: "center",
  },
  fifth_column: {
    width: "10%",
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
  cell_text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: "2%",
    borderWidth: 1,
    padding: 10,
  },
});

export default FridgeScreen;
