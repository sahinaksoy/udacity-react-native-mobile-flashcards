import React from "react";
import { View, Text } from "react-native";
import Deck from "./Deck";
import TouchButton from "./TouchButton";

const DeckDetail = (props) => {
  return (
    <View>
      <Deck />
      <View>
        <TouchButton>
          <Text>Add Card</Text>
        </TouchButton>
        <TouchButton>
          <Text>Start Quiz</Text>
        </TouchButton>
      </View>
    </View>
  );
};

export default DeckDetail;
