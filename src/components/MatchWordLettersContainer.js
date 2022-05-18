import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import MatchLetterHolder from "./MatchLetterHolder";

export default function MatchWordLettersContainer() {
  const { matchWord, matchWordLetters } = useContext(GameContext);
  return (
    <>
      <div className={`${matchWord.length >= 6 ? "matchWordLettersContainerGrid" : "matchWordLettersContainer"}`}>
        {matchWordLetters.map((letter, index) => (
          <MatchLetterHolder letter={letter} key={index} />
        ))}
      </div>
    </>
  );
}
