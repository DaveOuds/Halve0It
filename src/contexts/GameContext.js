import React, { createContext, useState } from "react";
import { useToast } from "native-base";

const GameContext = createContext();

const GameContextProvider = (props) => {
  const rounds = [15, 16, "Double", 17, 18, "Triple", 19, 20, "Bull"];
  const [round, setRound] = useState(0);
  const [playerNames, setPlayerNames] = useState([]);
  const [currPlayer, setCurrPlayer] = useState(0);
  const currentRound = rounds[round];
  const currentPlayer = playerNames[currPlayer];
  const toast = useToast();

  const nextPlayer = (x) => {
    const points = parseInt(x);
    if (checkScore(points)) {
      addScore(points);

      if (playerNames.length !== currPlayer + 1) {
        setCurrPlayer(currPlayer + 1);
      }

      setCurrPlayer(0);
      setRound(round + 1);
      if (!rounds[round + 1]) {
        return true;
      }
    } else {
      toast.show({
        title: "Please give a valid score",
        status: "error",
        description: "Only multipications of this round or 0 is allowed.",
      });
    }
    return false;
  };

  const addScore = (points) => {
    const newScore = [...playerNames];
    newScore[currPlayer].score =
      points === 0 ? currentPlayer.score / 2 : currentPlayer.score + points;
    setPlayerNames(newScore);
  };

  const restartGame = () => {
    setRound(0);
    setCurrPlayer(0);
  };

  const resetGame = () => {
    setPlayerNames([]);
    restartGame();
  };

  const checkScore = (points) => {
    if (typeof currentRound === "number") {
      return points % currentRound === 0;
    } else if (currentRound == "bull") {
      return points % 25 === 0;
    } else {
      const div = currentRound === "Double" ? 2 : 3;
      return points % div === 0;
    }
  };

  const addPlayer = (name) => {
    setPlayerNames([...playerNames, { name, score: 40 }]);
  };

  const deletePlayer = (index) => {
    const newPlayerNames = [...playerNames];
    newPlayerNames.splice(index, 1);
    setPlayerNames(newPlayerNames);
  };

  const state = {
    playerNames,
    addPlayer,
    deletePlayer,
    rounds,
    currentRound,
    currentPlayer,
    nextPlayer,
    resetGame,
    restartGame,
  };

  return (
    <GameContext.Provider value={state}>{props.children}</GameContext.Provider>
  );
};

const GameContextContextConsumer = GameContext.Consumer;

export { GameContext, GameContextProvider, GameContextContextConsumer };
