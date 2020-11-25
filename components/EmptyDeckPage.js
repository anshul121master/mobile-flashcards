import React, { Component } from "react";
import {
  Button,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export default class EmptyDeckPage extends Component {
  goToDeck = () => {
    const { route, navigation } = this.props;
    const { deckId } = route.params;
    navigation.navigate("DeckDetails", { deckId });
  };

  render() {
    return (
      <View>
        <Text>
          You Currently have no cards in deck. Please add some cards to proceed.
        </Text>
        <TouchableOpacity style={styles.button} onPress={this.goToDeck}>
          <Text>Back to Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});
