import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
import { 
    StyleSheet, Text, View, SafeAreaView, 
    Image, TouchableWithoutFeedback, TouchableOpacity, 
    TouchableHighlight, Button, Alert, Platform, Dimensions,
    ImageBackground, TextInput
 } from 'react-native';


import {Dropdown, MultiSelect} from 'react-native-element-dropdown';



const data = [
    {label: 'Normal', value: 'Normal'},
    {label: 'Diet', value: 'Diet'},
    {label: 'Healthy', value: 'Healthy'},
    {label: 'Gym', value: 'Gym'},
    {label: 'DASH', value: 'DASH'},
];


function Profile(props) {
    
    const [budget, onChangeNumber]=React.useState(null);
    const [location, onChangeLocation]=React.useState(null);

    
    const [dropdown, setDropdown] = React.useState(null);
    const [selected, setSelected] = React.useState([]);

    const _renderItem = item => {
        return (
        <View style={styles.item}>
            <Text style={styles.textItem}>{item.label}</Text>
            <Image style={styles.icon} source={require('../assets/favicon.png')} />
        </View>
        );
    };


    return (
        <View
            style = {styles.container}
            source={require("../assets/background.jpg")}> 
            <View style={styles.textWrapper}>
                <Text style={styles.textIntextWrapper}>Food Choice</Text>
                <Text style={[styles.textIntextWrapper,styles.arrow]} onPress={foodChoicePress}>></Text>
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.textIntextWrapper}>Budget</Text>
                <TextInput 
                    style={[styles.textIntextWrapper,styles.arrow]}
                    onChangeText={onChangeNumber}
                    value={budget}
                    placeholder="0.00"
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.textIntextWrapper}>Food Goal</Text>
                {/* <Text style={[styles.textIntextWrapper,styles.arrow]} onPress={foodChoicePress}>Gym</Text> */}
                <Dropdown
                    style={styles.dropdown}
                    containerStyle={styles.shadow}
                    data={data}
                    search
                    searchPlaceholder="Search"
                    labelField="label"
                    valueField="value"
                    label="Dropdown"
                    placeholder="Select"
                    value={dropdown}
                    onChange={item => {
                    setDropdown(item.value);
                        console.log('selected', item);
                    }}
                    // renderLeftIcon={() => (
                    //     <Image style={styles.icon} source={require('./assets/account.png')} />
                    // )}
                    renderItem={item => _renderItem(item)}
                    textError="Error"
                />
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.textIntextWrapper}>Location</Text>
                <TextInput 
                    style={[styles.textIntextWrapper,styles.arrow]}
                    onChangeText={onChangeLocation}
                    value={location}
                    placeholder="Mars"
                    keyboardType="default"
                />
            </View>
            
        </View>
        
    );

        

    function foodChoicePress(){
        console.log('food choice pressed')
        console.log(budget)
        console.log(location)
        console.log(dropdown)
    }
 






}


const styles = StyleSheet.create({
    background: {
        backgroundColor:"#ffefdb",
        flex: 1,
        
        justifyContent: "center",
        alignItems:"center",
        textAlign:"left"
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems:"center",
        //padding: "7.5%",
    },
    textWrapper: {
        marginTop:"5%",
        width: '85%',
        height: "5%",
        backgroundColor: "#ec9a9a",
        paddingLeft:10,
        flexDirection:"row",

        // textAlign:"left",
        // margin: 50,
        // display:"flex",
        // justifyContent:"flex-start",
        // alignItems:"flex-start0"
    },
    textIntextWrapper:{
        color:"white",
        fontSize:30,
        fontWeight:"bold",
    },
    arrow:{
        //paddingLeft:"50%",
        //width:"100%"
        position:"absolute",
        right:0,
        width:"30%",
        textAlign:"right",
        paddingRight:10
    },


    dropdown: {
        borderBottomColor: 'gray',
        backgroundColor: 'rgba(52, 52, 52, 0.1)',
        position:"absolute",
        right:0,
        width:"30%",
        height:"100%",
        paddingRight:10,
        paddingLeft:10,

        color:"white",
        fontSize:30,
        fontWeight:"bold",
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
})



export default Profile;