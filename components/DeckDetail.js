import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Deck from "./Deck";

const DeckDetail = (props) => {
  return (
    <View>
      <Deck />
      <View>
        <TouchableOpacity>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeckDetail;
