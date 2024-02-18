import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const SmallBoxButtons = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.smallBox,
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
  smallBox: {
    backgroundColor: "#9C2929",
    padding: 20,
    borderRadius: 10,
    width: "48%",
    height: "40%",
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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

export default SmallBoxButtons;
