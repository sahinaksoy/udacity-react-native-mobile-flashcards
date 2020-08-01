import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import TouchButton from "./TouchButton";
import { saveDeckTitle } from "../utils/api";
import { StackActions, NavigationActions } from "react-navigation";

class AddDeck extends Component {
  state = {
    title: "",
  };
  handleChange = (title) => {
    this.setState({ title });
  };

  handleSubmit = () => {
    const { navigation } = this.props;
    const { title } = this.state;

    saveDeckTitle(title);
    this.setState({
      title: "",
    });

    navigation.navigate("DeckDetail", { id: title });
  };

  render() {
    return (
      <View>
        <View style={{ margin: 20, borderWidth: 1 }}>
          <View style={{ marginBottom: 15 }}>
            <Text>What is the title of your new deck?</Text>
          </View>
          <TextInput
            placeholder="Deck Name"
            autoFocus={true}
            onChangeText={this.handleChange}
          />
        </View>
        <TouchButton
          onPress={this.handleSubmit}
          disbled={this.state.title == ""}
        >
          Create Deck
        </TouchButton>
      </View>
    );
  }
}

export default AddDeck;
