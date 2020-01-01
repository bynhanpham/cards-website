import { useState } from "react";

export default function useGameState() {
  const [gameState, setGameState] = useState({
    players: [1, 0, 0, 0],
    currPlayer: 0,
    player1: [],
    player2: [],
    player3: [],
    player4: [],
    inPlay: [],
    turn: 1
  });

  function shuffle() {
    let arr = [...DECK];
    arr.forEach((value, idx) => {
      let n = arr.length - 1 - idx;
      let ran = Math.floor(Math.random() * (52 - idx));
      [arr[n], arr[ran]] = [arr[ran], arr[n]];
    });
    return arr;
  }

  const functions = {
    deal: () => {
      let arr = shuffle();
      let player1 = [],
        player2 = [],
        player3 = [],
        player4 = [];
      for (let i = 0; i < 13; i++) {
        player1.push(arr.pop());
        player2.push(arr.pop());
        player3.push(arr.pop());
        player4.push(arr.pop());
      }
      player1 = player1.sort(function(a, b) {
        return a - b;
      });
      setGameState(state => ({
        ...state,
        player1,
        player2,
        player3,
        player4
      }));
    },
    playCards: cards => {
      let arr = [...gameState.player1];
      cards.forEach((value, idx) => {
        let arrIdx = arr.indexOf(value);
        arr.splice(arrIdx, 1);
      });
      setGameState(state => ({ ...state, inPlay: cards, player1: arr }));
    }
  };

  return [gameState, functions];
}

const DECK = [
  3,
  3.3,
  3.6,
  3.9,
  4,
  4.3,
  4.6,
  4.9,
  5,
  5.3,
  5.6,
  5.9,
  6,
  6.3,
  6.6,
  6.9,
  7,
  7.3,
  7.6,
  7.9,
  8,
  8.3,
  8.6,
  8.9,
  9,
  9.3,
  9.6,
  9.9,
  10,
  10.3,
  10.6,
  10.9,
  11,
  11.3,
  11.6,
  11.9,
  12,
  12.3,
  12.6,
  12.9,
  13,
  13.3,
  13.6,
  13.9,
  14,
  14.3,
  14.6,
  14.9,
  15,
  15.3,
  15.6,
  15.9
];
