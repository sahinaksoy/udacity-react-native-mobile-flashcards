import React from "react";
import { View, Text } from "react-native";
import Deck from "./Deck";
import TouchButton from "./TouchButton";

const DeckDetail = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Deck />
      <View>
        <TouchButton onPress={() => navigation.navigate("AddCard")}>
          <Text>Add Card</Text>
        </TouchButton>
        <TouchButton onPress={() => navigation.navigate("Quiz")}>
          <Text>Start Quiz</Text>
        </TouchButton>
      </View>
    </View>
  );
};

export default DeckDetail;
