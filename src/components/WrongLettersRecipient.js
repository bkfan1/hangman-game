import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function WrongLettersRecipient() {
  const { wrongLetters} = useContext(GameContext);
  return (
    <>
      <aside className="wrongLettersRecipient">
        <h1>Wrong letters:</h1>
        <div
          className={`container 
          `}
        >
          {wrongLetters.map((letter, index) => (
            <p key={index}>
              {wrongLetters.length === 1 ? `${letter}` : `${letter}, `}
            </p>
          ))}
        </div>
      </aside>
    </>
  );
}
