import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';

const data = [
    {label: 'Food 1', value: '1'},
    {label: 'Food 2', value: '2'},
    {label: 'Food 3', value: '3'},
    {label: 'Food 4', value: '4'},
    {label: 'Food 5', value: '5'},
    {label: 'Food 6', value: '6'},
    {label: 'Food 7', value: '7'},
    {label: 'Food 8', value: '8'},
];

const FoodChoice = _props => {
    const [dropdown, setDropdown] = useState(null);
    const [selectedWant, setSelectedWant] = useState([]);
    const [selectedUnwant, setSelectedUnwant] = useState([]);

    const _renderItem = item => {
        return (
        <View style={styles.item}>
            <Text style={styles.textItem}>{item.label}</Text>
            <Image style={styles.icon} source={require('../../assets/favicon.png')} />
        </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Food Choice</Text>
            <MultiSelect
                style={[styles.dropdown,styles.wanted]}
                data={data}
                labelField="label"
                valueField="value"
                label="Multi Select"
                placeholder="Wanted Food"
                search
                searchPlaceholder="Search"
                value={selectedWant}
                onChange={item => {
                setSelectedWant(item);
                    console.log('selected', item);
                }}
                renderItem={item => _renderItem(item)}
            />
            <MultiSelect
                style={[styles.dropdown,styles.unwanted]}
                data={data}
                labelField="label"
                valueField="value"
                label="Multi Select"
                placeholder="Unwanted Food"
                search
                searchPlaceholder="Search"
                value={selectedUnwant}
                onChange={item => {
                setSelectedUnwant(item);
                    console.log('selected', item);
                }}
                renderItem={item => _renderItem(item)}
            />
        </View>
    );
};

export default FoodChoice;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(176, 224, 230, 0.1)",
        padding: 40,
    },
    title:{
        fontSize:40,
        position:"absolute",
        top:100,
        left:50,
        fontWeight:'bold'

    },
    dropdown: {
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        marginTop: 20,
        paddingLeft:10,
        paddingRight:10,
    },
    unwanted:{
        
        marginTop:"20%",
    },
    wanted:{
        marginTop:"50%",
    },
    icon: {
        marginRight: 5,
        width: 18,
        height: 18,
    },
    item: {
        paddingVertical: 17,
        paddingHorizontal: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
});