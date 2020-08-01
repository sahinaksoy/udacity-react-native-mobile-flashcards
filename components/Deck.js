import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { gray, white, pink } from "../utils/colors";
import { getDeck } from "../utils/api";

class Deck extends Component {
  
  render() {
    const { deck } = this.props;

    return (
      <View style={styles.deckBox}>
        {deck && (
          <React.Fragment>
            <View>
              <Text style={styles.deckText}>{deck.title && deck.title}</Text>
            </View>
            <View>
              <Text style={styles.cardText}>
                {deck.questions && deck.questions.length}
                &nbsp;cards
              </Text>
            </View>
          </React.Fragment>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deckBox: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 100,
    flexBasis: 100,
    backgroundColor: gray,
    marginBottom: 8,
  },
  deckText: {
    fontSize: 21,
    color: white,
  },
  cardText: {
    fontSize: 18,
    color: white,
  },
});

export default Deck;
