import React, { Component } from "react";
import Deck from "./Deck";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { getDecks } from "../utils/api";

class DeckList extends Component {
  state = {
    decks: {},
  };

  componentDidMount() {
    this.props.navigation.addListener("focus", () => {
      getDecks().then((decks) => {
        this.setState({
          decks,
        });
      });
    });
  }

  render() {
    const { navigation } = this.props;
    const { decks } = this.state;
    return (
      <ScrollView>
        {Object.values(decks).map((deck) => {
          return (
            <TouchableOpacity
              key={deck.title}
              onPress={() =>
                navigation.navigate("DeckDetail", { id: deck.title })
              }
            >
              <Deck deck={deck} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
}

export default DeckList;
