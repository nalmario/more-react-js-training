// initial state of dynamically updating game board
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  // // manage and update game board state
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // // Handles the change of a square to X or O on the game board
  // // Params:
  // //
  // function handleSelectSquare(rowIndex, colIndex) {
  //   // don't want to lose previous state of the game board, function is used
  //   setGameBoard((prevGameBoard) => {
  //     // create a new value that copies old array data
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {/*output game board grid dynamically*/}
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {/*map rows in the list*/}
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
