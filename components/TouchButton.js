import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { red, white } from "../utils/colors";

const TouchButton = ({ children, onPress }) => {
  return (
    <View style={styles.touchBtnContainer}>
      <TouchableOpacity style={styles.touchBtn} onPress={onPress}>
        <Text style={styles.touchBtnText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  touchBtnContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  touchBtnText: {
    color: white,
    fontSize: 20,
    fontWeight: "bold",
  },
  touchBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 40,
    backgroundColor: red,
  },
});

export default TouchButton;
