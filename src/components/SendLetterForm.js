import { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";
import ErrorFigure from "./ErrorFigure";

export default function SendLetterForm() {
  const {
    matchWord,
    matchWordLetters,
    guessedLetters,
    remainingGuessingAttempts,
    setRemainingGuessingAttempts,
    setGuessedLetters,
    wrongLetters,
    setWrongLetters,
    error,
    setError,
  } = useContext(GameContext);

  const [currentSubmittingValue, setCurrentSubmitingValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (matchWord.includes(currentSubmittingValue)) {
      if (!guessedLetters.includes(currentSubmittingValue)) {
        setError(null);
        setGuessedLetters([...guessedLetters, currentSubmittingValue]);
        setCurrentSubmitingValue("");
        return;
      }
      setError("Already guessed letter.");
      setRemainingGuessingAttempts(remainingGuessingAttempts - 1);
      setTimeout(() => {
        setError(null);
      }, 1600);
    } else {
      if (!wrongLetters.includes(currentSubmittingValue)) {
        setWrongLetters([...wrongLetters, currentSubmittingValue]);
        setCurrentSubmitingValue("");
      }
      setError("Wrong letter.");
      setRemainingGuessingAttempts(remainingGuessingAttempts - 1);
      setCurrentSubmitingValue("");
      setTimeout(() => {
        setError(null);
      }, 1600);
    }
  };

  return (
    <>
      <form
        className={`sendLetterForm ${
          remainingGuessingAttempts === 0 ||
          guessedLetters.length === matchWordLetters.length
            ? "disabledFormStyles"
            : ""
        }`}
      >
        {error ? <ErrorFigure error={error} /> : ""}
        <label>Letter:</label>
        <div>
        <input
          onChange={(e) =>
            setCurrentSubmitingValue(e.target.value.toUpperCase())
          }
          value={currentSubmittingValue}
          type="text"
          minLength="1"
          maxLength="1"
          disabled={
            remainingGuessingAttempts === 0 ||
            guessedLetters.length === matchWordLetters.length
              ? true
              : false
          }
        />

        <button
        title="Send letter"
          onClick={(e) => handleSubmit(e)}
          disabled={
            remainingGuessingAttempts === 0 ||
            guessedLetters.length === matchWordLetters.length
              ? true
              : false
          }
          className="sendLetterForm__btn"
        >
          <i className="bi bi-send-fill"/>
        </button>

        </div>
        
      </form>
    </>
  );
}
