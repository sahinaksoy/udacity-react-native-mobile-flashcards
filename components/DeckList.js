import React from "react";
import Deck from "./Deck";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";


const DeckList = (props) => {
  const { navigation } = props;
  return (
    <ScrollView>
      <TouchableOpacity
        key={"title"}
        onPress={() => navigation.navigate("DeckDetail")}
      >
        <Deck />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DeckList;
