import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function MealScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text> Deciding what to eat here.</Text>
            <Button
                style={styles.screenButton}
                title="Go to TestScreen"
                onPress={() => navigation.navigate('Test')}
            /> 
            
        </View>
    );
}

const styles = StyleSheet.create({
    screenButton: {
        width: '50%',
        height: 70,
    }
})

export default MealScreen;