import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MentorFindScreen from './src/components/screens/MentorFindScreen';

const stack = createNativeStackNavigator();

export const App =()=> {

// Initialisations -------------------
// State -----------------------------
// Handlers --------------------------
//View -------------------------------
return (
  <NavigationContainer>
      <stack.Navigator 
      initialRouteName='MentorFindScreen'
      screenOptions={{
        headerStyle: {backgroundColor:'black'},
        headerTintColor:'white',


      }} 
      >
        <stack.Screen
        name='MentorFindScreen'
        component= {MentorFindScreen}
        options ={{title:'Mentors'}}
        />
  
    

     </stack.Navigator>
   </NavigationContainer>
  );};


  export default App;