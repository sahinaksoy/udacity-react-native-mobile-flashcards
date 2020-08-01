import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import TouchButton from "./TouchButton";

class QuizResult extends Component {
  render() {
    const { total, correctCount, onRestart, navigation } = this.props;

    return (
      <View>
        <View>
          <Text style={{ fontSize: 28, textAlign: "center" }}>
            Quiz Complete
          </Text>
          <Text style={{ fontSize: 28, textAlign: "center" }}>
            {correctCount} / {total} correct
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 28, textAlign: "center" }}>
            Percentage correct!
          </Text>
          <Text style={{ fontSize: 28, textAlign: "center" }}>
            {((correctCount / total) * 100).toFixed(0)}%
          </Text>
        </View>

        <TouchButton
          onPress={() => {
            onRestart();
          }}
        >
          <Text>Restart Quiz</Text>
        </TouchButton>
        <TouchButton
          onPress={() => {
            navigation.navigate("Home");
            onRestart();
          }}
        >
          <Text>Back To Deck</Text>
        </TouchButton>
      </View>
    );
  }
}

export default QuizResult;
