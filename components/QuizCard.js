import React, { Component } from "react";
import {
    View,
    Text,
  } from "react-native";

export default class QuizCard extends Component{
    render(){
        const { text, label, toggleLabel } = this.props
        return (
            <View>
                <Text>{text}</Text>
                <Text onPress={() => toggleLabel(label)}>{label}</Text>
            </View>
        )
    }
}