import { ScrollView, StyleSheet } from "react-native";
import MentorItem from "./MentorItem";

const MentorList = ({ mentors, onSelect }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------
  return (
    <ScrollView style={styles.container}>
      {mentors.map((mentor) => {
        return (
          <MentorItem
            key={mentor.MentorID}
            mentor={mentor}
            onSelect={onSelect}
          />
        );
      })}
    </ScrollView>
  );
};
const styles = StyleSheet.create({});

export default MentorList;
