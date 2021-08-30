import "react-native-gesture-handler";
import React from "react";
import { StartScreen, PlayScreen, EndScreen } from "../screens";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Play" component={PlayScreen} />
      <Stack.Screen name="End" component={EndScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
