import React, { Component } from "react";
import { getDecks, getDeck } from "../utils/api";
 
import { StyleSheet, Text, View } from "react-native";
class TestScreen extends Component {
  state = {
    decks: null,
    deck: null,
  };

  componentDidMount() {
    getDecks().then((decks) => {
      this.setState({
        decks,
      });
    });

    getDeck("React").then((deck) => {
      this.setState({
        deck,
      });
    });
  }
  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.state.decks)}</Text>
      </View>
    );
  }
}
export default TestScreen;
