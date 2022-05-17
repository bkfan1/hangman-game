import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import MatchLetterHolder from "./MatchLetterHolder";

export default function MatchWordLettersContainer() {
  const { matchWordLetters } = useContext(GameContext);
  return (
    <>
      <div className="matchWordLettersContainer">
        {matchWordLetters.map((letter, index) => (
          <MatchLetterHolder letter={letter} key={index} />
        ))}
      </div>
    </>
  );
}
