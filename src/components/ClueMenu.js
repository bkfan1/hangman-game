import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function ClueMenu() {
  const {
    matchWordLetters,
    guessedLetters,
    letterClue,
    setLetterClue,
    clueCounter,
    setClueCounter,
  } = useContext(GameContext);
  const handleClickClueBtn = () => {
    if (clueCounter > 0) {
      setClueCounter(clueCounter - 1);
      const randInt = Math.floor(Math.random() * matchWordLetters.length);
      setLetterClue(matchWordLetters[randInt]);
    }
  };
  return (
    <>
      <menu className="clueMenu">
        <h1>Remaining clues: {clueCounter}</h1>
        <button onClick={handleClickClueBtn}>Get letter clue</button>
        <p>{letterClue}</p>
      </menu>
    </>
  );
}
