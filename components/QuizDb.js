import React, { Component } from "react";
import {
  Button,
  View,
  Text,
} from "react-native";
import QuizCard from "./QuizCard";
import QuizResult from "./QuizResult";
import { setLocalNotification, clearLocalNotification } from "../utils/helper";

export default class QuizDb extends Component {
  state = {
    questionCount: 0,
    score: 0,
    currentlyShowing: "Question"
  };

  toggleLabel = label => {
    this.setState({
      currentlyShowing: label
    });
  };

  handleButtonClick = buttonType => {
    if (buttonType === "Correct") {
      this.setState(currentState => ({
        questionCount: currentState.questionCount + 1,
        score: currentState.score + 1,
        currentlyShowing: "Question"
      }));
    } else {
      this.setState(currentState => ({
        questionCount: currentState.questionCount + 1,
        currentlyShowing: "Question"
      }));
    }
  };

  handleQuizRestart = () => {
    this.setState({
      questionCount: 0,
      score: 0,
      currentlyShowing: "Question"
    });
  };

  handleGoToDeck = () => {
    const { route, navigation } = this.props;
    const { deckId } = route.params;
    navigation.navigate("DeckDetails", { deckId });
  };

  render() {
    let { currentlyShowing, questionCount, score } = this.state;
    const { route, navigation } = this.props;
    const { questions } = route.params;
    if (questionCount === questions.length) {
      //Notification logic
      clearLocalNotification().then(setLocalNotification);
      return (
        <QuizResult
          score={score}
          questionCount={questions.length}
          restartQuiz={this.handleQuizRestart}
          goToDeck={this.handleGoToDeck}
        />
      );
    }

    let { question, answer } = questions[questionCount];
    let quizCard = null;
    if (currentlyShowing === "Question")
      quizCard = (
        <QuizCard
          text={question}
          label="Answer"
          toggleLabel={this.toggleLabel}
        />
      );
    else
      quizCard = (
        <QuizCard
          text={answer}
          label="Question"
          toggleLabel={this.toggleLabel}
        />
      );
    return (
      <View>
        <Text>
          {questionCount + 1}/{questions.length}
        </Text>
        {quizCard}
        <View>
          <Button
            title="Correct"
            onPress={() => this.handleButtonClick("Correct")}
          />
          <Button
            title="InCorrect"
            onPress={() => this.handleButtonClick("InCorrect")}
          />
        </View>
      </View>
    );
  }
}
