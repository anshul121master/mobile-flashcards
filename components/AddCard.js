import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard
} from "react-native";
import { handleAddCardToDeck } from "../actions/decks";
import { connect } from "react-redux";

class AddCard extends Component {
  state = {
    question: "",
    answer: ""
  };

  handleChangeQuestion = question => {
    this.setState({
        question
    });
  };

  handleChangeAnswer = answer => {
    this.setState({
        answer
    });
  };

  handleSubmit = () => {
    const { dispatch, navigation, route } = this.props;
    const { deckId } = route.params
    dispatch(handleAddCardToDeck(deckId, this.state));
    navigation.navigate("DeckDetails", { deckId });
  };

  render() {
    const { question, answer } = this.state;
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter new Question"
          onBlur={Keyboard.dismiss}
          value={question}
          onChangeText={this.handleChangeQuestion}
        />

        <TextInput
        style={styles.textInput}
        placeholder="Enter an Answer"
        onBlur={Keyboard.dismiss}
        value={answer}
        onChangeText={this.handleChangeAnswer}
      />

        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.createSubmitBtn}
            onPress={this.handleSubmit}
            disabled={ question === "" || answer === "" ? true : false}
          >
            <Text style={styles.createSubmitBtnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingTop: 15
  },
  textInput: {
    borderColor: "#CCCCCC",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  },
  createSubmitBtn: {
    borderWidth: 1,
    borderColor: "#007BFF",
    backgroundColor: "#007BFF",
    padding: 15,
    margin: 5
  },
  createSubmitBtnText: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center"
  }
});

export default connect()(AddCard);
