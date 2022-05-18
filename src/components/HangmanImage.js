import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function HangmanImage() {
  const { hangmanImage } = useContext(GameContext);
  return (
    <>
      <img src={hangmanImage} alt="Hangman" height="350" />
    </>
  );
}
