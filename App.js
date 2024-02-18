import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MentorFindScreen from "./src/components/screens/MentorFindScreen";
import MeetingsScreen from "./src/components/screens/MeetingsScreen";
import HomeScreen from "./src/components/screens/HomeScreen";
import SignInScreen from "./src/components/screens/SignInScreen";
import SignUpScreen from "./src/components/screens/SignUpScreen";

const stack = createNativeStackNavigator();

export const App = () => {
  // Initialisations -------------------
  // State -----------------------------
  // Handlers --------------------------
  //View -------------------------------
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="SignUpScreen"
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
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
