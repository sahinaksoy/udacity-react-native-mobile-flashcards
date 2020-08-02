import React, { Component } from "react";
import MainNavigator from "./components/MainNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { setLocalNotification } from "./utils/helpers";

class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    );
  }
}

export default App;
