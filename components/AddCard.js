import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import TouchButton from "./TouchButton";

class AddCard extends Component {
  render() {
    return (
      <View>
        <View style={{ margin: 20, borderWidth: 1 }}>
          <TextInput
            placeholder="Question"
            autoFocus={true}
            returnKeyType="done"
          />
        </View>
        <View style={{ margin: 20, borderWidth: 1 }}>
          <TextInput
            placeholder="Answer"
            autoFocus={true}
            returnKeyType="done"
          />
        </View>
        <TouchButton>Create Card</TouchButton>
      </View>
    );
  }
}
export default AddCard;
