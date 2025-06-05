import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  // Handles edit/save button for changing player name
  function handleEditClick() {
    // setIsEditing(!isEditing)
    setIsEditing((editing) => !editing); // BEST PRACTICE: going back and forth between two states, use a function to ensure instant change (bts)

    if (isEditing) {
      onChangeName(symbol, playerName); // pass symbol to and name to handler function in App.jsx
    }
  }

  // Handles the change of the player name input when editing
  function handleChange(event) {
    setPlayerName(event.target.value); // two-way binding, event will change player name and feed it back into the input where it's called
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            value={playerName}
            onChange={handleChange}
            required
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}
