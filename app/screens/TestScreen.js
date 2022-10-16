import React, { useState, useEffect} from "react";
import { ImageBackground, StyleSheet, View, Text, FlatList } from "react-native";
import getFoodFromApiAsync from "../../api/api";

function TestScreen(props) {
  // <ImageBackground
  //     style = {styles.background}
  //     source={require("../assets/background.jpg")}>
  // </ImageBackground>
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch(
      "https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=tyyeFULMm01buehPyX8JxSQ6MlFiIIVWysBY1vzX"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, color: "green", textAlign: "center" }}>
            {data.title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "green",
              textAlign: "center",
              paddingBottom: 10,
            }}
          >
            Articles:
          </Text>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item}</Text>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default TestScreen;
