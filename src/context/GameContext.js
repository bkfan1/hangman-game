import { useState, useEffect, createContext } from "react";
import { words } from "../utils/words";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const ls = window.localStorage;

  const [matchWord, setMatchWord] = useState("");
  const [matchWordLetters, setMatchWordLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  const [hangmanImage, setHangmanImage] = useState("");

  const [remainingGuessingAttempts, setRemainingGuessingAttempts] = useState(5);
  const [clueCounter, setClueCounter] = useState(0);
  const [letterClue, setLetterClue] = useState("");

  const [themeMode, setThemeMode] = useState("light");
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleHangmanImage = () => {
      switch (remainingGuessingAttempts) {
        case 5:
          setHangmanImage(`/sprites/hangman/${themeMode}/state_0.png`);

          break;
        case 4:
          setHangmanImage(`/sprites/hangman/${themeMode}/state_1.png`);
          break;
        case 3:
          setHangmanImage(`/sprites/hangman/${themeMode}/state_2.png`);
          break;
        case 2:
          setHangmanImage(`/sprites/hangman/${themeMode}/state_3.png`);
          break;

        case 1:
          setHangmanImage(`/sprites/hangman/${themeMode}/state_4.png`);
          break;

        case 0:
          setHangmanImage(`/sprites/hangman/${themeMode}/state_5.png`);
          break;
        default:
          throw Error(`Nice attempt trying to break the game :D`);
          break;
      }
    };

    handleHangmanImage();
  }, [remainingGuessingAttempts, themeMode]);

  const setMatch = () => {
    setRemainingGuessingAttempts(5);
    setGuessedLetters([]);
    setWrongLetters([]);
    setLetterClue("");
    setError(null);

    const randInt = Math.floor(Math.random() * words.length);

    setMatchWordLetters(words[randInt].split(""));
    setMatchWord(words[randInt]);
    setClueCounter(words[randInt].length >= 5 ? 3 : 2);
  };

  useEffect(() => {
    setMatch();
  }, []);

  useEffect(() => {
    const rememberTheme = () => {
      const theme = ls.getItem("theme");
      if (theme) {
        setThemeMode(theme);
      }
    };

    rememberTheme();
  }, [themeMode]);

  const handleClickThemeMode = () => {
    if (themeMode === "light") {
      setThemeMode("dark");
      ls.setItem("theme", "dark");
    } else {
      setThemeMode("light");
      ls.setItem("theme", "light");
    }
  };

  return (
    <>
      <GameContext.Provider
        value={{
          setMatch,
          hangmanImage,
          themeMode,
          handleClickThemeMode,

          matchWord,
          matchWordLetters,
          guessedLetters,
          wrongLetters,
          setWrongLetters,

          remainingGuessingAttempts,
          setRemainingGuessingAttempts,
          setGuessedLetters,

          clueCounter,
          setClueCounter,

          letterClue,
          setLetterClue,

          error,
          setError,
        }}
      >
        {children}
      </GameContext.Provider>
    </>
  );
};
