import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { gray, white, pink } from "../utils/colors";

const Deck = (props) => {
  return (
    <View style={styles.deckBox}>
      <View>
        <Text style={styles.deckText}>Deck 1</Text>
      </View>
      <View>
        <Text style={styles.cardText}>10 cards</Text>
      </View>
    </View>
  );
};

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
