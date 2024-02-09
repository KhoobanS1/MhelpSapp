import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

const MentorItem = ({ mentor, onSelect }) => {
  return (
    <Pressable onPress={() => onSelect(mentor)} style={styles.item}>
      <View style={styles.content}>
        <Image source={{ uri: mentor.MentorsImage }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{mentor.MentorsName}</Text>
          <Text style={styles.rating}>Rating: {mentor.MentorsRating}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f0f0f0',
    marginBottom: 10, // Adjust the spacing between mentor items
    borderRadius: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25, // Make the profile picture round
    marginRight: 10,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 14,
    color: 'gray',
  },
});

export default MentorItem;
