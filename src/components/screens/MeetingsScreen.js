// MeetingsScreen.js
import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Screen from "../layout/Screen";
import { Button, ButtonTray } from "../UI/Button";
import Icons from "../UI/Icons";
import Calendar from "../UI/Calendar";

const MeetingsScreen = () => {
  const navigation = useNavigation();

  const handleFindMentor = () => {
    navigation.navigate("MentorFindScreen");
  };

  const handleRequestMeeting = () => {
    alert("Meeting requested!");
  };

  const handleDayPress = (day) => {
    console.log("Selected day: ", day);
    // You can handle the selected day here
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity
          onPress={handleFindMentor}
          style={styles.findMentorButton}
        >
          <View style={styles.findMentorButtonContainer}>
            <Text style={styles.findMentorButtonText}>Find Mentor</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.chooseMethodLabel}>Choose Method</Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.selectiveButton}>
            <Text>Online</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectiveButton}>
            <Text>Face to Face</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.calendarContainer}>
          <Calendar onDayPress={handleDayPress} />
        </View>
      </View>
      <ButtonTray>
        <Button
          label="Request"
          onClick={handleRequestMeeting}
          styleButton={styles.requestButton}
          styleLabel={styles.requestButtonText}
        />
      </ButtonTray>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#ecf0f1",
  },
  container1: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    height: "95%",
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  findMentorButton: {},
  findMentorButtonContainer: {
    backgroundColor: "white",
    padding: 15,
    alignItems: "center",
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  findMentorButtonText: {
    color: "black",
    fontSize: 16,
  },
  chooseMethodLabel: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  selectiveButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
    height: "60%",
    marginBottom: 20,
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  calendarContainer: {},

  requestButton: {
    backgroundColor: "#9C2929",
    padding: 15,
    borderRadius: 10,
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 80,
    position: "absolute",
    bottom: 50,
    marginLeft: 160,
  },
  requestButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default MeetingsScreen;
