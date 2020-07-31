import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import TouchButton from "./TouchButton";
import {
  purple,
  gray,
  white,
  red,
  orange,
  blue,
  lightPurp,
  pink,
} from "../utils/colors";

class Quiz extends Component {
  state = {
    showAnswer: false,
  };

  handleShowAnswer = () => {
    this.setState({
      showAnswer: true,
    });
  };
  render() {
    const { showAnswer } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.reminderText}>
          <Text>
            Card {5} of {8}
          </Text>
        </View>
        <View style={styles.quizCard}>
          <Text style={styles.questionText}>
            Ankara where is the capital city?
          </Text>
          <View style={{ marginTop: 10 }} />
          {!showAnswer && (
            <TouchButton onPress={this.handleShowAnswer}>
              <Text>Show Answer</Text>
            </TouchButton>
          )}
          {showAnswer && (
            <React.Fragment>
              <TouchButton>
                <Text>Show Answer</Text>
              </TouchButton>
              <View style={{ marginTop: 10 }} />
              <Text style={styles.answerText}>Turkey</Text>
              <View style={{ marginTop: 10 }} />

              <View>
                <TouchButton>
                  <Text>Correct</Text>
                </TouchButton>
                <TouchButton>
                  <Text>Incorrect</Text>
                </TouchButton>
              </View>
            </React.Fragment>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  reminderText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: red,
  },
  quizCard: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: gray,
  },
  questionText: {
    fontSize: 22,
    marginBottom: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
  answerText: {
    fontSize: 26,
    marginBottom: 5,
    fontWeight: "bold",
    textAlign: "center",
    color: white,
  },
});

export default Quiz;
