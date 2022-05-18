import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function MatchLetterHolder({ letter }) {
  const { guessedLetters} = useContext(GameContext);
  return (
    <>
      <figure
        className={`matchLetterHolder`}
      >
        {guessedLetters.includes(letter) ? <p>{letter}</p> : ""}
      </figure>
    </>
  );
}
