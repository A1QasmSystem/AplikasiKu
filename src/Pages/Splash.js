import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class Splash extends React.Component{
    render(){
        return (
            <View style={Style.container}>
                <Text style={Style.text}>Hai</Text>
            </View>
        )
    }
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 36,
        color: 'black',
        left: 155,
        top: 200,
        
    }
})