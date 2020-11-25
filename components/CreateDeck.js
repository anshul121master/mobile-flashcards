import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard
} from "react-native";
import { handleAddDeck } from "../actions/decks";
import { connect } from "react-redux";

class CreateDeck extends Component {
  state = {
    title: ""
  };

  handleChange = title => {
    this.setState({
      title
    });
  };

  handleSubmit = () => {
    const { dispatch } = this.props;
    const { title } = this.state;
    dispatch(handleAddDeck(title));
  };

  render() {
    const { title } = this.state;
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Please Enter Deck Name"
          onBlur={Keyboard.dismiss}
          value={title}
          onChangeText={this.handleChange}
        />

        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.createDeckBtn}
            onPress={this.handleSubmit}
            disabled={title === "" ? true: false}
          >
            <Text style={styles.createDeckBtnText}>Create Deck</Text>
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
  createDeckBtn: {
    borderWidth: 1,
    borderColor: "#007BFF",
    backgroundColor: "#007BFF",
    padding: 15,
    margin: 5
  },
  createDeckBtnText: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center"
  }
});

function mapStateToProps({ newDeckId }, ownProps) {
  if (Object.keys(newDeckId).length !== 0) {
    const { navigation } = ownProps;
    navigation.navigate("DeckDetails", { deckId: newDeckId.newDeckId });
  }
  return {};
}

export default connect(mapStateToProps)(CreateDeck);
