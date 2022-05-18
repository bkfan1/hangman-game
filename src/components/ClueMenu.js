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

        <div style={{ display: "flex", alignItems: "center" }}>
          <button style={{ margin: "12px 0px" }} onClick={handleClickClueBtn}>
            Get letter clue
          </button>
          {letterClue ? (
            <p className="letterClue">
              <i
                className="bi bi-question-circle-fill"
                style={{ marginRight: "5px" }}
              />
              {letterClue}
            </p>
          ) : (
            ""
          )}
        </div>
      </menu>
    </>
  );
}
