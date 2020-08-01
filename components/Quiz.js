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
import { getDeck } from "../utils/api";
import QuizResult from "./QuizResult";

class Quiz extends Component {
  state = {
    showAnswer: false,
    deck: {
      title: "",
      questions: [],
    },
    currentIndex: 0,
    correctCount: 0,
  };

  componentDidMount() {
    const { route } = this.props;
    const id = route.params.id;

    this.props.navigation.addListener("focus", () => {
      getDeck(id).then((deck) => {
        this.setState({
          deck,
        });
        this.forceUpdate();
      });
    });
  }

  handleShowAnswer = () => {
    this.setState({
      showAnswer: true,
    });
  };

  handleCorrect = () => {
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      correctCount: this.state.correctCount + 1,
      showAnswer: false,
    });
  };

  handleInCorrect = () => {
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      showAnswer: false,
    });
  };

  handleRestart = () => {
    this.setState({
      currentIndex: 0,
      correctCount: 0,
    });
  };

  render() {
    const { deck, showAnswer, currentIndex, correctCount } = this.state;
    const total = deck.questions.length;
    const question = deck.questions[currentIndex];
    return (
      <View style={{ flex: 1 }}>
        {total > 0 &&
          (currentIndex == total ? (
            <QuizResult
              total={total}
              correctCount={correctCount}
              onRestart={this.handleRestart}
              {...this.props}
            />
          ) : (
            <React.Fragment>
              <View style={styles.reminderText}>
                <Text>
                  Card {currentIndex + 1} of {deck.questions && total}
                </Text>
              </View>
              <View style={styles.quizCard}>
                <Text style={styles.questionText}>{question.question}</Text>
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
                    <Text style={styles.answerText}>{question.answer}</Text>
                    <View style={{ marginTop: 10 }} />

                    <View>
                      <TouchButton onPress={this.handleCorrect}>
                        <Text>Correct</Text>
                      </TouchButton>
                      <TouchButton onPress={this.handleInCorrect}>
                        <Text>Incorrect</Text>
                      </TouchButton>
                    </View>
                  </React.Fragment>
                )}
              </View>
            </React.Fragment>
          ))}
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
    maxHeight: 50,
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
