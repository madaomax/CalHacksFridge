import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

function MealScreen( props ) {
    return (
        <View>
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text> Deciding what to eat here.</Text>
            </View>


            <View style={ styles.navigationBar }>

                <View style={{ alignItems: 'flex-start'}}>
                <Button
                style={styles.screenButton}
                title="Go to TestScreen1"
                /> 
                </View>

                <View style={{ alignItems: 'flex-start'}}>
                <Button
                style={styles.screenButton}
                title="Go to TestScreen2"></Button>
                </View>
            
            </View>

            
        

            
        </View>
       
    );
}

const styles = StyleSheet.create({
    screenButton: {
        width: '50%',
        height: 70,
    },
    navigationBar: {
        width: '100%',
        height: 80,
        position: 'absolute',
        bottom: 100,


    }
})

export default MealScreen;