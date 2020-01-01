import React from "react";
import useGameState from "./../hooks/useGameState";
import Board from "./Board";

export const GameContext = React.createContext();

export default function GameMaster() {
  const [gameState, functions] = useGameState();
  return (
    <>
      <GameContext.Provider value={[gameState, functions]}>
        <Board />
      </GameContext.Provider>
    </>
  );
}
