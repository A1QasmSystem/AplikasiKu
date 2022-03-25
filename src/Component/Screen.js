import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";

export default class BelajarAPI extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            body: '',
            UserId: ''
            
        }
    }
    Register(){
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.body,
                userId: this.state.UserId
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json))
    }
    render(){
        return (
            <View style={Style.container}>
                <TextInput 
                style={Style.texInput}
                placeholder="Title"
                placeholderTextColor={"black"}
                onChangeText={(Username) => this.setState({title : Username})}
                ></TextInput>
                <TextInput 
                style={Style.texInput2}
                placeholder="Body"
                placeholderTextColor={"black"}
                onChangeText={(email) => this.setState({body : email})}
                ></TextInput>
                <TextInput 
                style={Style.texInput3}
                placeholder="UserId"
                placeholderTextColor={"black"}
                onChangeText={(password) => this.setState({UserId : password})}
                ></TextInput>
                <TouchableOpacity 
                style={Style.tombol}
                onPress={() => this.Register()}>
                    <Text style={Style.textombol}>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellowgreen'
    },
    texInput: {
        width: 250,
        height: 50,
        top: 100,
        left: 50,
        borderRadius: 15,
        backgroundColor: 'white',
        paddingLeft: 15,
        color: 'black'
    },
    texInput2: {
        width: 250,
        height: 50,
        top: 120,
        left: 50,
        borderRadius: 15,
        backgroundColor: 'white',
        paddingLeft: 15,
        color: 'black'
    },
    texInput3: {
        width: 250,
        height: 50,
        top: 140,
        left: 50,
        borderRadius: 15,
        backgroundColor: 'white',
        paddingLeft: 15,
        color: 'black'
    },texInput4: {
        width: 250,
        height: 50,
        top: 160,
        left: 50,
        borderRadius: 15,
        backgroundColor: 'white',
        paddingLeft: 15,
        color: 'black'
    },
    tombol: {
        // position: 'absolute',
        width: 100,
        height: 50,
        top: 230,
        left: 190,
        borderRadius: 15,
        backgroundColor: 'black',
    },
    textombol: {
        position: 'absolute',
        padding: 10,
        left: 20,
        fontSize: 18,
        color: 'white',

    }
})