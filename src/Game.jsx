import React from 'react'
import Board from './board.jsx'
import './Game.css'

function Game () {
  const grid = [
    [0, 0, 0, 0],
    [0, 0, 0, 2],
    [2, 4, 4, 0],
    [2, 0, 8, 4],
  ]

  return (
    <Board grid={grid}/>
  );
}

export default Game;