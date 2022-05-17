import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function WrongLettersRecipient() {
  const { wrongLetters, themeMode } = useContext(GameContext);
  return (
    <>
      <aside className="wrongLettersRecipient">
        <h1>Wrong letters:</h1>
        <div
          className={`container ${
            themeMode === "dark" ? "container__darkTheme" : ""
          }`}
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
