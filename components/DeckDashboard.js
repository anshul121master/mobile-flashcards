import React, { Component } from "react";
import { handleInitData } from "../actions/decks";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import DeckCard from "./DeckCard";

class DeckDashboard extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitData());
  }

  render() {
    const { decks, navigation } = this.props;
    return (
      <ScrollView >
        <Text style={styles.title}>Mobile Flashcards</Text>
        {Object.values(decks).map(deck => {
          return (
            <TouchableOpacity
              key={deck.id}
              onPress={() =>
                navigation.navigate("DeckDetails", {
                  deckId: deck.id,
                })
              }
            >
              <DeckCard title={deck.title} cardCount={deck.questions.length} />
            </TouchableOpacity>
          );
        })}
        <View style={{ marginBottom: 30 }} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: "#7B8788"
  },
  title: {
    fontSize: 35,
    textAlign: "center",
    marginBottom: 16,
    color: "#26ae60"
  }
});

function mapStateToProps({ decks }) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(DeckDashboard);
