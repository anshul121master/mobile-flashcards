import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export default class QuizResult extends Component {
  render() {
    const { score, questionCount, restartQuiz, goToDeck } = this.props;
    return (
      <View>
        <Text>
          You Scored : {score} out of {questionCount}
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => restartQuiz()}>
          <Text>Restart Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => goToDeck()}>
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
  },
})
