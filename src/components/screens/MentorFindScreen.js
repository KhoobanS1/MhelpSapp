import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import initialMentors from "../../data/mentors.js";
import MentorList from "../entity/mentors/MentorList.js";

const MentorFindScreen = () => {
  // Initialisations -------------------
  const mentors = initialMentors;
  // State -----------------------------
  // Handlers --------------------------
  const handleSelect = (mentors) =>
    alert(`Item ${mentors.MentorsName} selected`);
  //View -------------------------------
  return (
    <Screen>
      <MentorList mentors={mentors} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MentorFindScreen;
