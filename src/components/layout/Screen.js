import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

const Screen = ({ children }) => {
  return (
    <View style={styles.screen}>
      {/* Main content */}
      <View style={styles.content}>{children}</View>

      {/* Navbar */}
      <View style={styles.navbar}>
        <Text style={styles.navbarItem}>Home</Text>
        <Text style={styles.navbarItem}>Meetings</Text>
        <Text style={styles.navbarItem}>Settings</Text>
      </View>

      {/* Status bar */}
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 15,
    flex: 1,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    height: 80,
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  navbarItem: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Screen;
