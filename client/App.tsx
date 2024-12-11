import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import ArtistSignup from "./components/Artists/Signup";
import UserSignup from "./components/Users/Signup";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
     
        <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />

    
        <Stack.Screen
          name="UserSignup"
          component={UserSignup}
          options={{ title: "User Signup" }}
        />

        <Stack.Screen
          name="ArtistSignup"
          component={ArtistSignup}
          options={{ title: "Artist Signup" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
