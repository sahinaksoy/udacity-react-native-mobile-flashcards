import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";

import {
  purple,
  gray,
  white,
  red,
  orange,
  blue,
  lightPurp,
  pink,
} from "../utils/colors";

import AddCard from "./AddCard";
import Deck from "./Deck";
import Quiz from "./Quiz";
import DeckDetail from "./DeckDetail";

const navigationOptions = {
  headerTintColor: white,
  headerStyle: {
    backgroundColor: gray,
  },
};
const Stack = createStackNavigator();
const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="DeckDetail" component={DeckDetail} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="AddCard" component={AddCard} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
