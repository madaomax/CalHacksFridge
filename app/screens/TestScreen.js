import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

function TestScreen(props) {
    return (
        <ImageBackground
            style = {styles.background}
            source={require("../assets/background.jpg")}> 
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
    },
})



export default TestScreen;