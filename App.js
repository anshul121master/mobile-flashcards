import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import reducer from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import middleware from "./middlewares";
import CreateDeck from "./components/CreateDeck";
import { NavigationContainer } from "@react-navigation/native";
import AllStacks from "./components/AllStacks";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { setLocalNotification } from './utils/helper'

const store = createStore(reducer, middleware);

const Tab = createBottomTabNavigator();

export default class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName="AllStacks"
              tabBarOptions={{
                activeTintColor: "#e91e63"
              }}
            >
              <Tab.Screen
                name="AllStacks"
                component={AllStacks}
                options={{ tabBarLabel: "Decks" }}
              />
              <Tab.Screen
                name="CreateDeck"
                component={CreateDeck}
                options={{ tabBarLabel: "Add Deck" }}
              />
             
            </Tab.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "stretch",
    justifyContent: "center"
  }
});
