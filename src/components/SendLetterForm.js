import { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";
import ErrorFigure from "./ErrorFigure";

export default function SendLetterForm() {
  const {
    matchWord,
    guessedLetters,
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
    } else {
      setWrongLetters([...wrongLetters, currentSubmittingValue]);
      setError("Wrong letter.");
    }
  };

  return (
    <>
      <form className="sendLetterForm">
        {error ? <ErrorFigure error={error} /> : ""}
        <label>Letter:</label>
        <input
          onChange={(e) =>
            setCurrentSubmitingValue(e.target.value.toUpperCase())
          }
          type="text"
          minLength="1"
          maxLength="1"
        />

        <button onClick={(e) => handleSubmit(e)}>Send</button>
      </form>
    </>
  );
}
