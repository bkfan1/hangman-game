import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function MatchLetterHolder({ letter }) {
  const { guessedLetters, themeMode } = useContext(GameContext);
  return (
    <>
      <figure
        className={`matchLetterHolder ${
          themeMode === "dark" ? "matchLetterHolder__darkTheme" : ""
        }`}
      >
        {guessedLetters.includes(letter) ? <p>{letter}</p> : ""}
      </figure>
    </>
  );
}
