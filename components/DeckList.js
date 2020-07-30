import React from "react";
import Deck from "./Deck";
import { ScrollView } from "react-native";

const DeckList = (props) => {
  return (
    <ScrollView>
      <Deck />
      <Deck />
      <Deck />
      <Deck />
      <Deck />
      <Deck />
      <Deck />
    </ScrollView>
  );
};

export default DeckList;
