import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, FlatList, TextInput, ScrollView } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import FridgeItem from './FridgeItem.js';

export default function Menu(props) {
  const [data, add_row] = useState([{id: "id", name: 'Name', rating: 'Ratings', 
  showTrash:false, servings:'Servings'}]);
  const [test, update_test] = useState(1);
  const [addBoxState, update_addBoxState] = useState(false);
  const [food, onChangeFood] = useState("Beef");
  const [rating, onChangeRating] = useState(5);
  const [serving, onChangeServing] = useState(0);
  //const [listHeight, changeListHeight] = useState(25);
  const defaultAddServings = {
    "beef":10,
    "egg":1,
    "chicken":5,
    "apple":3,
    "pumpkin":7
  }
  const defaultDays = {
    "beef":10,
    "egg":1,
    "chicken":5,
    "apple":3,
    "pumpkin":7
  }
  const addNewItem = () => {
    let newState = data.map(obj => {
      return obj;
    });
    if (isNaN(rating)) {
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
    
    
    newState.push({id: test, name: food, rating: rating, showTrash:true, servings: tempServing});
    let newState2 = [...newState].sort((a, b) => a.rating - b.rating);
    let newState3 = []
    for (var i = 0; i < newState2.length; i++) {
      newState3.push({id: i, name: newState2[i].name, rating: newState2[i].rating,
         showTrash: newState2[i].showTrash, servings: newState2[i].servings});
    }
    
    newState3[0].id = "id";
    newState3[0].servings = "Servings";
    console.log(newState3);
    add_row(newState3);
    
    console.log(data);
    update_test(test + 1);
  }
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
    let newState2 = []
    for (var i = 0; i < newState.length; i++) {
      newState2.push({id: i, name: newState[i].name, rating: newState[i].rating,
        showTrash: newState[i].showTrash, servings: newState[i].servings});
    }
    newState2[0].id = "id";
    add_row(newState2);
  }

  const cookItem = (item) => {
    console.log(item.servings);
    if (!(item.name.toLowerCase() in props) || item.servings > props[item.name.toLowerCase()]){
        alert("You do not have enough material for this recipie");
        return;
    }
    //props[item.name.toLowerCase()] -= item.servings;
    console.log(props);
  }




  const showAddBox = () => {
    update_addBoxState(!addBoxState);
  }
  // const item = ({ item }) => (
  //   <View style={{ flexDirection: 'row', height: 25 }}>
  //       <View style={styles.first_column}>
  //           <Text style={styles.cell_text}>{item.id}</Text>
  //       </View>
  //       <View style={styles.second_column}>
  //           <Text style={styles.cell_text}>{item.name}</Text>
  //       </View>
  //       <View style={styles.third_column}>
  //           <Text style={styles.cell_text}>{item.rating}</Text>
  //       </View>
  //       <View style={styles.forth_column}>
  //         {item.showTrash && <TouchableOpacity onPress={() => deleteItem(item.id)} >
  //           <Image 
  //             style={{ width: 20, height: 20}}
  //             source={ require("./assets/AddButton.png")}
  //           />
  //         </TouchableOpacity>}
  //       </View>
  //   </View>
  // )

  return (
    <View style={styles.container}>
      <Text>FRIDGE</Text>
      {addBoxState && (
        <View style={{height: "37%", width:200, top: "30%", position:"absolute", zIndex: 2, backgroundColor:"powderblue"}}>
          <Text>Enter Food Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeFood}
            value={food}
          />
          {/* <TextInput
            style={styles.input}
            onChangeText={onChangeRating}
            value={date}
          /> */}
          <Text>Enter Rating</Text>
          <TextInput 
            style={styles.input}
            keyboardType='numeric'
            onChangeText={onChangeRating}
            value={rating}
            maxLength={10}  //setting limit of input
          />

          <Text>Enter Servings</Text>
          <TextInput 
            style={styles.input}
            keyboardType='numeric'
            onChangeText={onChangeServing}
            value={serving}
            maxLength={10}  //setting limit of input
          />

          <TouchableOpacity onPress={addNewItem} style={{ alignItems:"center"}}>
            <Image 
              style={{ width: 20, height: 20}}
              source={ require("./assets/AddButton.png")}
            />
          </TouchableOpacity>
        </View>
      )}
      
      <View style={styles.f_item}>
        <ScrollView>
          {/* <FlatList data={data} renderItem={item} keyExtractor={item => item.id.toString()} /> */}
          {data.map((item) => {
            return( 
              <View key={item.id} style={{ flexDirection: 'row', height: 25 }}>
                <View style={styles.first_column}>
                    <Text style={styles.cell_text}>{item.id}</Text>
                </View>
                <View style={styles.second_column}>
                    <Text style={styles.cell_text}>{item.name}</Text>
                </View>
                <View style={styles.third_column}>
                    <Text style={styles.cell_text}>{item.rating}</Text>
                </View>
                <View style={styles.forth_column}>
                    <Text style={styles.cell_text}>{item.servings}</Text>
                </View>
                <View style={styles.fifth_column}>
                  {item.showTrash && <TouchableOpacity onPress={() => cookItem(item)} >
                    <Image 
                      style={{ width: 20, height: 20}}
                      source={ require("./assets/AddButton.png")}
                    />
                  </TouchableOpacity>}
                </View>
                <View style={styles.sixth_column}>
                  {item.showTrash && <TouchableOpacity onPress={() => deleteItem(item.id)} >
                    <Image 
                      style={{ width: 20, height: 20}}
                      source={ require("./assets/AddButton.png")}
                    />
                  </TouchableOpacity>}
                </View>
              </View>
            )
          })}
        </ScrollView>
        
      </View>
      
      <TouchableOpacity onPress={showAddBox}>
        <Image 
          style={{ width: 100, height: 100}}
          source={ require("./assets/AddButton.png")}
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top:"5%",
    backgroundColor: '#fff',
    alignItems: 'center',
    height:"100%"
  },
  f_item: {
    backgroundColor: '#ffe4c4',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "5%",
    width:"95%",
    height:"70%"
  },
  first_column: {
    width: "10%", 
    backgroundColor: 'lightyellow'
  },
  second_column: {
    width: "25%", 
    backgroundColor: 'lightpink'
  },
  third_column: {
    width: "25%", 
    backgroundColor: 'lavender'
  },
  forth_column: {
    width: "20%", 
    backgroundColor: 'bisque',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fifth_column: {
    width: "10%", 
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sixth_column: {
    width: "10%", 
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cell_text:{
    fontSize: 16, 
    fontWeight: 'bold', 
    textAlign: 'center'
  },
  input: {
    height: 40,
    margin: "2%",
    borderWidth: 1,
    padding: 10
  }
});
