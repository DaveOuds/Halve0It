import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { GameContext } from "../contexts/GameContext";
import { Box, Input, Button, Flex, Text } from "native-base";
import {} from "native-base";

export default function PlayScreen({ navigation }) {
  const [input, setInput] = useState("");
  const { currentRound, currentPlayer, nextPlayer } = useContext(GameContext);

  const next = () => {
    if (nextPlayer(input)){
        navigation.navigate("End");
    }
    setInput("");
  };

  return (
    <Box
      justify="space-between"
      alignItems="center"
      safeArea
      flex={1}
      px={25}
      bg="#3C4043"
    >
      <Flex
        justify="center"
        align="center"
        borderRadius={200}
        bgColor="red.500"
        width={200}
        height={200}
      >
        <Text fontSize="4xl" color="#fff">
          {currentRound}
        </Text>
      </Flex>
      <Text color="#000" pb={25} fontSize="3xl">Player: {currentPlayer.name}</Text>
      <Text color="#000" pb={25} fontSize="3xl">Score: {currentPlayer.score}</Text>

      <Input
        value={input}
        autoCompleteType="off"
        mb={25}
        bg="#fff"
        size="xl"
        isFullWidth={true}
        keyboardType="numeric"
        onChange={(e) => setInput(e.nativeEvent.text)}
        placeholder="Enter score"
      />

      <Button
        onPress={next}
        width="60%"
        colorScheme="green"
        isDisabled={!input.length}
      >
        Next
      </Button>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 56,
  },
  title: {
    fontSize: 56,
    marginBottom: 14,
  },
  input: {
    width: 280,
    height: 72,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    fontSize: 36,
  },
});
