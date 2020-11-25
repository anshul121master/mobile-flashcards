import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default class DeckCard extends Component {
  render() {
    const { title, cardCount } = this.props;
    return (
      <View style={styles.deckContainer}>
        <View>
          <Text style={styles.deckText}>{title}</Text>
        </View>
        <View>
          <Text style={styles.cardText}>{cardCount} cards</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    deckContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      flexBasis: 125,
      minHeight: 125,
      borderColor: '#aaa',
      backgroundColor: "white",
      borderRadius: 5,
      marginBottom: 10
    },
    deckText: {
      fontSize: 30
    },
    cardText: {
      fontSize: 20,
      color: "grey"
    }
  });