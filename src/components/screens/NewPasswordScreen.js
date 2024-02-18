import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../UI/CustomButton/CustomButton";
import SocialSignInButtons from "../UI/SocialSignInButtons/SocialSignInButtons";

const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [NewPassword, setNewPassword] = useState("");

  const onSubmitPressed = () => {
    console.warn("Submitted");
  };

  const onSignInPressed = () => {
    console.warn("onSignInPressed");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset your password</Text>

      <CustomInput placeholder="Code" value={code} setValue={setCode} />
      <CustomInput
        placeholder="Enter your new password"
        value={NewPassword}
        setValue={setNewPassword}
      />

      <CustomButton text={"Submit"} onPress={onSubmitPressed} />

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

export default NewPasswordScreen;
