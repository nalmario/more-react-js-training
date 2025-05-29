import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

// Helper function: doesn't need data from state or component, stays outside of component function
// Returns the current player
function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  // checks if the game has started and if it's the most recent turn
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  // will hold data on the active turn
  const [gameTurns, setGameTurns] = useState([]);

  // // active player symbol
  // const [activePlayer, setActivePlayer] = useState("X");
  const activePlayer = deriveActivePlayer(gameTurns);

  //  Handles events of a clicked game board tile
  function handleSelectSquare(rowIndex, colIndex) {
    // // update symbol of current active player
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));

    // update log data of the turn
    setGameTurns((prevTurns) => {
      // uses helper function to get the current player
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {/*two completely isolated instances of Player comoponent*/}
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
