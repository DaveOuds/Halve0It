import "react-native-gesture-handler";
import React from "react";
import { GameContextProvider } from "./src/contexts/GameContext";
import Router from "./src/components/Router";
import { NativeBaseProvider, Box } from "native-base";

const App = () => (
  <NativeBaseProvider>
    <Box flex={1} bg="#3C4043" safeArea px={5}>
      <GameContextProvider>
        <Router />
      </GameContextProvider>
    </Box>
  </NativeBaseProvider>
);

export default App;
