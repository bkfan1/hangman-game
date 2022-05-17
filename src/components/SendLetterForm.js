import { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";
import ErrorFigure from "./ErrorFigure";

export default function SendLetterForm() {
  const {
    matchWord,
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
        return;
      }
      setError("Already guessed letter.");
      setRemainingGuessingAttempts(remainingGuessingAttempts - 1);
    } else {
      if (!wrongLetters.includes(currentSubmittingValue)) {
        setWrongLetters([...wrongLetters, currentSubmittingValue]);
      }
      setError("Wrong letter.");
      setRemainingGuessingAttempts(remainingGuessingAttempts - 1);
    }
  };

  return (
    <>
      <form
        className={`sendLetterForm ${
          remainingGuessingAttempts === 0 ? "disabledFormStyles" : ""
        }`}
      >
        {error ? <ErrorFigure error={error} /> : ""}
        <label>Letter:</label>
        <input
          onChange={(e) =>
            setCurrentSubmitingValue(e.target.value.toUpperCase())
          }
          type="text"
          minLength="1"
          maxLength="1"
          disabled={remainingGuessingAttempts === 0 ? true : false}
        />

        <button
          onClick={(e) => handleSubmit(e)}
          disabled={remainingGuessingAttempts === 0 ? true : false}
          className="sendLetterForm__btn"
        >
          Send
        </button>
      </form>
    </>
  );
}
