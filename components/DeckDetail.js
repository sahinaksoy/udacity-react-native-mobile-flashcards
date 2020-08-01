import React, { Component } from "react";
import { View, Text } from "react-native";
import Deck from "./Deck";
import TouchButton from "./TouchButton";
import { getDeck } from "../utils/api";

class DeckDetail extends Component {
  state = {
    deck: {},
  };

  componentDidMount() {
    const { route } = this.props;
    const id = route.params.id;

    getDeck(id).then((deck) => {
      this.setState({
        deck,
      });
    });
  }

  render() {
    const { deck } = this.state;
    return (
      <View>
        {deck && (
          <React.Fragment>
            <Deck id={deck.title} />
            <View>
              <TouchButton onPress={() => navigation.navigate("AddCard")}>
                <Text>Add Card</Text>
              </TouchButton>
              <TouchButton onPress={() => navigation.navigate("Quiz")}>
                <Text>Start Quiz</Text>
              </TouchButton>
            </View>
          </React.Fragment>
        )}
      </View>
    );
  }
}

export default DeckDetail;
