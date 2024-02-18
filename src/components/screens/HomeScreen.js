import React from "react";
import { StyleSheet, View, Text } from "react-native";
import HomeButtons from "../UI/HomeButton/HomeButtons";
import SmallBoxButtons from "../UI/HomeButton/SmallBoxButtons";

const HomeScreen = () => {
  const onMainPressed = () => {
    console.warn("Main Pressed");
  };
  const onTasksPressed = () => {
    console.warn("Tasks Pressed");
  };
  const onActivityPressed = () => {
    console.warn("Activity Pressed");
  };
  return (
    <View style={styles.container}>
      <HomeButtons text={"Main"} onPress={onMainPressed} />
      <View style={styles.smallBoxContainer}>
        <SmallBoxButtons text={"Tasks"} onPress={onTasksPressed} />
        <SmallBoxButtons text={"Activity"} onPress={onActivityPressed} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  largeBox: {
    backgroundColor: "#9C2929",
    padding: 20,
    borderRadius: 10,
    height: "30%",
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    flexDirection: "row",
  },
  smallBoxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    height: "50%",
    marginBottom: 20,
  },

  calendarContainer: {
    width: "95%",
    padding: 20,
    marginTop: 20,
  },
});

export default HomeScreen;
