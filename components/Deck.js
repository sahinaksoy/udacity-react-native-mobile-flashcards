import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
    width:200,
    backgroundColor: "#020122",
    marginBottom: 8,
    color: "#EDD382",
  },
  deckText: {
    fontSize: 21,
    color: "#EDD382",
  },
  cardText: {
    fontSize: 18,
    color: "#EDD382",
  },
});
export default Deck;
