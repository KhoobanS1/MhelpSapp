import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const MeetingsScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  const randomDates = {}; 
  
  // random date formula
  for (let i = 0; i < 5; i++) {
    const year = 2024;
    const month = Math.floor(Math.random() * 12) + 1; 
    const day = Math.floor(Math.random() * 28) + 1; // Random day from 1 to 28
    const date = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    randomDates[date] = { selected: true, selectedColor: 'red' };
  }

  const handleFindMentor = () => {
    navigation.navigate('MentorFindScreen'); // Navigate to MentorFindScreen
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        {/* Clickable "Find Mentor" button */}
        <TouchableOpacity onPress={handleFindMentor} style={styles.findMentorButton}>
          <View style={styles.findMentorButtonContainer}>
            <Text style={styles.findMentorButtonText}>Find Mentor</Text>
          </View>
        </TouchableOpacity>
        
        {/* "Choose Method" label */}
        <Text style={styles.chooseMethodLabel}>Choose Method</Text>
        
        {/* Selective buttons for online and face to face */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.selectiveButton}>
            <Text>Online</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectiveButton}>
            <Text>Face to Face</Text>
          </TouchableOpacity>
        </View>
        
        {/* Calendar */}
        <View style={styles.calendarContainer}>
          <Calendar
            markedDates={randomDates} 
          />
        </View>
        
        {/* Request button */}
        <TouchableOpacity style={styles.requestButton}>
          <Text style={styles.requestButtonText}>Request</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#ecf0f1',
  },
  container1: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '100%', 
    height: '80%',
    shadowColor: 'grey',
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
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
      
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  
  },
  findMentorButtonText: {
    color: 'black',
    fontSize: 16,
  },
  chooseMethodLabel: {
    fontSize: 18,
    textAlign: 'center',
    marginTop:40,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  selectiveButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    height: '60%',
    marginBottom: 20,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  calendarContainer: {
    marginBottom: 20,
  },
  requestButton: {
    backgroundColor: '#9C2929',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  requestButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MeetingsScreen;
