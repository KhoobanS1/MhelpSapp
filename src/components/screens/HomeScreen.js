import React from "react";
import { StyleSheet, View, Text } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={[styles.largeBox, styles.calendarContainer]}>
          <Text style={styles.nameText}>Calendar</Text>
        </View>

        <View style={styles.smallBoxContainer}>
          <View style={[styles.smallBox, styles.taskContainer]}>
            <Text style={styles.nameText}>Tasks</Text>
          </View>

          <View style={[styles.smallBox, styles.activityContainer]}>
            <Text style={styles.nameText}>Activity</Text>
          </View>
        </View>
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
  calendarContainer: {
    width: "95%",
    padding: 20,
    marginTop: 20,
  },
  taskContainer: {},
  activityContainer: {},

  nameText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    width: "100%",
  },
});

export default HomeScreen;
