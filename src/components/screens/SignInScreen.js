import React, { useState } from "react";
import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../UI/CustomButton/CustomButton";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("Sign in");
  };

  const onForgotPasswordPressed = () => {
    console.warn("onForgotPasswordPressed");
  };

  const onSignInOutlook = () => {
    console.warn("onSignInOutlook");
  };

  const onSignInApple = () => {
    console.warn("onSignInApple");
  };

  const onSignUpPressed = () => {
    console.warn("onSignUpPressed");
  };

  return (
    <View style={styles.root}>
      <View style={styles.logo}>
        <Text>Hello this is sign in page</Text>
      </View>
      <CustomInput
        placeholder="Email Address"
        value={email}
        setValue={setEmail}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton text={"Sign in"} onPress={onSignInPressed} />

      <CustomButton
        text={"Forgot Password?"}
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      />

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
      <CustomButton
        text="Don't have an account? create one"
        onPress={onSignUpPressed}
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
  logo: {
    padding: 40,
  },
});

export default SignInScreen;
