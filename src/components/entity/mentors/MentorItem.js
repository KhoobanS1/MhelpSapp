import React from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

const MentorItem = ({ mentor, onSelect }) => {
  return (
    <Pressable onPress={() => onSelect(mentor)} style={styles.item}>
      <View style={styles.content}>
        <View style={styles.profileImageContainer}>
          <Image source={{ uri: mentor.MentorsImage }} style={styles.profileImage} />
        </View>
        <View style={styles.details}>
          <Text style={styles.name}>{mentor.MentorsName}</Text>
          <Text style={styles.profession}>{mentor.MentorsProfession}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingLabel}>Rating</Text>
          <Text style={styles.rating}>{mentor.MentorsRating}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,

  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImageContainer: {
    borderWidth: 2,
    borderColor: 'red', // Red ring around the profile image
    borderRadius: 50, // Make it circular
    overflow: 'hidden',
  },
  profileImage: {
    width: 50,
    height: 50,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profession: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  ratingLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    color: 'purple', // Dark purple color for the rating number
    fontWeight: 'bold',
  },
});

export default MentorItem;
