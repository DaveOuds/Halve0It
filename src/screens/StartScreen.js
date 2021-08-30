import React, { useState, useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import { Button, Input, Text, Box, Flex, Heading, FlatList } from "native-base";
import BoardIcon from "../../assets/board.svg";
import { SvgXml } from "react-native-svg";

export default function StartScreen({ navigation }) {
  const { addPlayer, playerNames, deletePlayer } = useContext(GameContext);
  const [input, setInput] = useState("");

  const renderItem = (x) => (
    <Flex flex={1} key={x.index} direction="row" justify="space-between">
      <Text color="#000" fontSize="lg">
        {x.item.name}
      </Text>
      <Text color="#000" onPress={() => deletePlayer(x.index)} fontSize="xl">
        X
      </Text>
    </Flex>
  );

  const add = () => {
    addPlayer(input);
    setInput("");
  };

  return (
    <Box alignItems="center" flex={1} px={25} bg="#3C4043">
      <Heading color="#000" size="2xl">
        Halve it
      </Heading>

      <Box bg="#000000" borderRadius={100} my={15}>
        <SvgXml width="200" height="200" xml={BoardIcon} />
      </Box>

      <Text color="#000" pb={25} fontSize="3xl">
        Players:
      </Text>

      <Input
        value={input}
        autoCompleteType="off"
        mb={25}
        bg="#fff"
        size="xl"
        isFullWidth={true}
        onSubmitEditing={add}
        onChange={(e) => setInput(e.nativeEvent.text)}
        placeholder="Enter Player name"
      />

      <FlatList
        flex={1}
        width="100%"
        mt={25}
        data={playerNames}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.name.toString()}
      />

      <Button
        width="60%"
        colorScheme="green"
        isDisabled={!playerNames.length}
        onPress={() => navigation.navigate("Play")}
      >
        Start
      </Button>
    </Box>
  );
}
