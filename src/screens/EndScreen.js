import React, { useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import { Button, Text, Box, Flex, FlatList } from "native-base";

export default function EndScreen({ navigation }) {
  const { restartGame, playerNames, resetGame } = useContext(GameContext);

  const renderItem = (x) => (
    <Flex flex={1} key={x.index} direction="row" justify="space-between">
      <Text color="#000" fontSize="lg">
        {x.item.name}
      </Text>
      <Text color="#000" fontSize="xl">
        {x.item.score}
      </Text>
    </Flex>
  );

  const restart = () => {
    restartGame();
    navigation.navigate("Play");
  };

  const reset = () => {
    resetGame();
    navigation.navigate("Start");
  };

  return (
    <Box alignItems="center" flex={1} px={25} bg="#3C4043">
      <Text color="#000" pb={25} fontSize="4xl">
        Winner:
      </Text>
      <Text color="#000" pb={25} fontSize="2xl">
        Score:
      </Text>
      <FlatList
        flex={1}
        width="100%"
        data={playerNames}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.name.toString()}
      />

      <Flex width="100%" justify="space-between" direction="row">
        <Button
          width="40%"
          colorScheme="green"
          onPress={reset}
        >
          New Game
        </Button>
        <Button
          width="40%"
          colorScheme="green"
          onPress={restart}
        >
          Restart
        </Button>
      </Flex>
    </Box>
  );
}
