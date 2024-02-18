import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../UI/CustomButton/CustomButton";
import SocialSignInButtons from "../UI/SocialSignInButtons/SocialSignInButtons";

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState("");

  const onConfirmPressed = () => {
    console.warn("Confirm");
  };

  const onSignInPressed = () => {
    console.warn("onSignInPressed");
  };

  const onResendPressed = () => {
    console.warn("Resend");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Confirm your email</Text>

      <CustomInput
        placeholder="Enter your confirmation code"
        value={code}
        setValue={setCode}
      />

      <CustomButton text={"Confirm"} onPress={onConfirmPressed} />

      <CustomButton
        text="Resend code"
        onPress={onResendPressed}
        type="SECONDARY"
      />

      <CustomButton
        text="Back to Sign in"
        onPress={onSignInPressed}
        type="TERTIARY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },

  link: {
    color: "#fdb075",
  },
});

export default ConfirmEmailScreen;
