import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import TouchButton from "./TouchButton";
import { addCardToDeck } from "../utils/api";

class AddCard extends Component {
  state = {
    question: "",
    answer: "",
  };

  handleQuestionChange = (question) => {
    this.setState({ question });
  };
  handleAnswerChange = (answer) => {
    this.setState({ answer });
  };

  handleSubmit = () => {
    const { route, navigation } = this.props;
    const id = route.params.id;
    addCardToDeck(id, this.state).then(() => {
      navigation.goBack();
      this.setState({ question: "", answer: "" });
    });
  };
  render() {
    return (
      <View>
        <View style={{ margin: 20, borderWidth: 1 }}>
          <TextInput
            placeholder="Question"
            autoFocus={true}
            onChangeText={this.handleQuestionChange}
          />
        </View>
        <View style={{ margin: 20, borderWidth: 1 }}>
          <TextInput
            placeholder="Answer"
            onChangeText={this.handleAnswerChange}
          />
        </View>
        <TouchButton
          onPress={this.handleSubmit}
          disbled={this.state.question == "" || this.state.answer == ""}
        >
          Create Card
        </TouchButton>
      </View>
    );
  }
}
export default AddCard;
