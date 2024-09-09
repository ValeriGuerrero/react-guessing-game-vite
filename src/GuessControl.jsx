import React, { Component } from "react";
import { useState } from "react";
import Button from "./Button";

export default function GuessControl({ onGuess }) {
  const [currentGuess, setCurrentGuess] = useState('')

  function handleInputChange(event) {
    setCurrentGuess(event.target.value)
  }

  function onSubmitGuess() {
    onGuess(Number(currentGuess));
    setCurrentGuess('');
  }

  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}