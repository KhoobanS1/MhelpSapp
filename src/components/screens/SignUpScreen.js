import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../UI/CustomButton/CustomButton";
import SocialSignInButtons from "../UI/SocialSignInButtons/SocialSignInButtons";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const onRegisterPressed = () => {
    console.warn("Register");
  };

  const onSignInPressed = () => {
    console.warn("onSignInPressed");
  };

  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed");
  };

  const onPrivacyPolicyPressed = () => {
    console.warn("onPrivacyPolicyPressed");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>
      <CustomInput
        placeholder="Email Address"
        value={email}
        setValue={setEmail}
      />
      <CustomInput
        placeholder="Full Name"
        value={fullName}
        setValue={setFullName}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomInput
        placeholder="Repeat Password"
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secureTextEntry={true}
      />
      <CustomButton text={"Register"} onPress={onRegisterPressed} />
      <Text style={styles.text}>
        By registering, you confirm that you accept our{" "}
        <Text style={styles.link} onPress={onTermsOfUsePressed}>
          {" "}
          Terms of Use
        </Text>{" "}
        and{" "}
        <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
          Privacy Policy
        </Text>
      </Text>

      <SocialSignInButtons />

      <CustomButton
        text="Have an account? Sign in"
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

export default SignUpScreen;
