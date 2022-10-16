import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function MealScreen( props ) {
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text> Deciding what to eat here.</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    screenButton: {
        width: '50%',
        height: 70,
    },
    choiceBlock: {
        width: '20%',
        height: '10%'
    }
})

export default MealScreen;