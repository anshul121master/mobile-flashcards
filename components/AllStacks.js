import React from "react";
import DeckDetails from "./DeckDetails";
import DeckDashboard from "./DeckDashboard";
import QuizDb from "./QuizDb";
import AddCard from "./AddCard";
import EmptyDeckPage from "./EmptyDeckPage";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function AllStacks() {
  return (
    <Stack.Navigator initialRouteName="DeckDashboard">
      <Stack.Screen
        name="DeckDashboard"
        component={DeckDashboard}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="DeckDetails"
        component={DeckDetails}
        options={{ title: "Deck" }}
      />
      <Stack.Screen
        name="AddCard"
        component={AddCard}
        options={{ title: "Add Card" }}
      />
      <Stack.Screen
        name="QuizDb"
        component={QuizDb}
        options={{ title: "Quiz" }}
      />
      <Stack.Screen
        name="EmptyDeckPage"
        component={EmptyDeckPage}
        options={{ title: "No Cards" }}
      />
    </Stack.Navigator>
  );
}
