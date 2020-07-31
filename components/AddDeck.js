import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import TouchButton from "./TouchButton";

class AddDeck extends Component {
  render() {
    return (
      <View>
        <View style={{ margin: 20,borderWidth: 1 }}>
          <TextInput
            placeholder="Deck Name"
            autoFocus={true}
            returnKeyType="done"
          />
        </View>
        <TouchButton>Create Deck</TouchButton>
      </View>
    );
  }
}

export default AddDeck;
