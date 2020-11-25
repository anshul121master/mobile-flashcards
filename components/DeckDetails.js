import React, { Component } from "react";
import {
  Button,
  View,
} from "react-native";
import DeckCard from "./DeckCard";
import { connect } from "react-redux";

class DeckDetails extends Component {
  render() {
    const { navigation, deckId, title, questions } = this.props;
    return (
      <View>
        <DeckCard title={title} cardCount={questions.length} />
        <View>
          <Button
            title="Add Card"
            onPress={() => navigation.navigate("AddCard", { deckId })}
          />
          <Button
            title="Start Quiz"
            onPress={() => {
              if (questions.length === 0)
                return navigation.navigate("EmptyDeckPage", { deckId });
              else return navigation.navigate("QuizDb", { questions, deckId });
            }}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps({ decks }, ownProps) {
  const { navigation, route } = ownProps;
  const { deckId } = route.params;
  const { title, questions } = decks[deckId];
  return {
    navigation,
    title,
    questions,
    deckId
  };
}

export default connect(mapStateToProps)(DeckDetails);
