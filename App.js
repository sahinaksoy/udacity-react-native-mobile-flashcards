import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Deck from "./components/Deck";
import DeckList from "./components/DeckList";
import DeckDetail from "./components/DeckDetail";
import AddDeck from "./components/AddDeck";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Deck /> */}
      {/* <DeckList /> */}
      {/* <DeckDetail /> */}
      <AddDeck />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
