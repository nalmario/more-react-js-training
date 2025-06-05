import { useState, useRef } from "react";

export default function Player() {
  // Ref value will be used to get value put in input field
  const playerNameInput = useRef();

  // State of player name
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  // Handle button set name button click
  function handleClick() {
    setEnteredPlayerName(playerNameInput.current.value); // can access element properties like 'value'
  }

  return (
    <section id="player">
      {/* do this if true ?? do this if false */}
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        {/* note ref prop */}
        <input ref={playerNameInput} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
