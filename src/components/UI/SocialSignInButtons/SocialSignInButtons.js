import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CustomButton from "../CustomButton/CustomButton";

export const SocialSignInButtons = () => {
  // Initialisations -------------------
  const onSignInOutlook = () => {
    console.warn("onSignInOutlook");
  };

  const onSignInApple = () => {
    console.warn("onSignInApple");
  };
  // State -----------------------------
  // Handlers --------------------------
  // View ------------------------------
  return (
    <>
      <CustomButton
        text={"Sign in with Outlook"}
        onPress={onSignInOutlook}
        bgColor="white"
        fgColor="blue"
      />
      <CustomButton
        text={"Sign in with Apple"}
        onPress={onSignInApple}
        bgColor="black"
        fgColor="white"
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SocialSignInButtons;
