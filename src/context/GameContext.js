import { useState, useEffect, createContext } from "react";
import { words } from "../utils/words";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [matchWord, setMatchWord] = useState(null);
  const [matchWordLetters, setMatchWordLetters] = useState(null);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [clueCounter, setClueCounter] = useState(0);
  const [letterClue, setLetterClue] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
      const setMatchWordAndLetters = ()=>{
          const randInt = Math.floor(Math.random()* words.length);

          setMatchWordLetters(words[randInt].split(""))
          setClueCounter(words[randInt].length % 2 === 0 ? words[randInt].length/2 : Math.floor(words[randInt].length/3)+1)
          setMatchWord(words[randInt])


      }
      setMatchWordAndLetters();
   
  }, []);

  return (
    <>
      <GameContext.Provider value={{matchWord, matchWordLetters, guessedLetters, setGuessedLetters, wrongLetters,setWrongLetters,letterClue,setLetterClue, clueCounter, setClueCounter, error, setError}}>{children}</GameContext.Provider>
    </>
  );
};
