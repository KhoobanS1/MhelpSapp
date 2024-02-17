import React from "react";
import { Calendar as RNCalendar } from "react-native-calendars";

const Calendar = ({ onDayPress }) => {
  const generateRandomDates = () => {
    const randomDates = {};
    for (let i = 0; i < 5; i++) {
      const year = 2024;
      const month = Math.floor(Math.random() * 12) + 1;
      const day = Math.floor(Math.random() * 28) + 1;
      const date = `${year}-${month < 10 ? "0" + month : month}-${
        day < 10 ? "0" + day : day
      }`;
      randomDates[date] = { selected: true, selectedColor: "red" };
    }
    return randomDates;
  };

  return (
    <RNCalendar markedDates={generateRandomDates()} onDayPress={onDayPress} />
  );
};

export default Calendar;
