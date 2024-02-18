import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const HomeButtons = ({ onPress, text, type = "PRIMARY", bgColor, fgColor }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.largeBox,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  largeBox: {
    backgroundColor: "#9C2929",
    padding: 20,
    borderRadius: 10,
    height: "30%",
    width: "95%",
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 20,

    flexDirection: "row",
  },

  container_PRIMARY: {
    backgroundColor: "#9C2929",
  },
  container_SECONDARY: {
    borderColor: "#9C2929",
    borderWidth: 2,
  },

  container_TERTIARY: {},

  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    width: "100%",
  },
  text_TERTIARY: {
    color: "gray",
  },
  text_SECONDARY: {
    color: "#9C2929",
  },
});

export default HomeButtons;
