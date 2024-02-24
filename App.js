import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MentorFindScreen from "./src/components/screens/MentorFindScreen";
import MeetingsScreen from "./src/components/screens/MeetingsScreen";
import HomeScreen from "./src/components/screens/HomeScreen";
import SignInScreen from "./src/components/screens/SignInScreen";
import SignUpScreen from "./src/components/screens/SignUpScreen";
import ConfirmEmailScreen from "./src/components/screens/ConfirmEmailScreen";
import ForgotPasswordScreen from "./src/components/screens/ForgotPasswordScreen";
import NewPasswordScreen from "./src/components/screens/NewPasswordScreen";
import Login from "./src/components/screens/Login/Login";

const stack = createNativeStackNavigator();

export const App = () => {
  // Initialisations -------------------
  // State -----------------------------
  // Handlers --------------------------
  //View -------------------------------
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: "#9C2929" },
          headerTintColor: "white",
        }}
      >
        <stack.Screen
          name="MentorFindScreen"
          component={MentorFindScreen}
          options={{ title: "Mentors" }}
        />

        <stack.Screen
          name="MeetingsScreen"
          component={MeetingsScreen}
          options={{ title: "Meeting" }}
        />

        <stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Home" }}
        />

        <stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ title: "Sign In" }}
        />
        <stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ title: "Sign Up" }}
        />
        <stack.Screen
          name="ConfirmEmailScreen"
          component={ConfirmEmailScreen}
          options={{ title: "Confirm Email" }}
        />
        <stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{ title: "Reset Password" }}
        />
        <stack.Screen
          name="NewPasswordScreen"
          component={NewPasswordScreen}
          options={{ title: "Reset Password" }}
        />
        <stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
