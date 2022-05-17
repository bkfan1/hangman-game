import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import ClueMenu from "./ClueMenu";
import MatchWordLettersContainer from "./MatchWordLettersContainer";
import SendLetterForm from "./SendLetterForm";
import SwitchThemeButton from "./SwitchThemeButton";
import WrongLettersRecipient from "./WrongLettersRecipient";

export default function GameApp() {
  const {
    setMatch,
    hangmanImage,
    themeMode,
    matchWordLetters,
    guessedLetters,
    remainingGuessingAttempts,
  } = useContext(GameContext);

  return (
    <>
      <main className={`${themeMode === "dark" ? "darkTheme" : ""}`}>
        <header>
          <h1>Hangman Game</h1>
          <h2>Created by Jackson Paredes Ferranti</h2>
        </header>
        <SwitchThemeButton />

        <section className="gameplaySection">
          <section className="hangmanSection">
            <img src={hangmanImage} height={380} alt={"Hangman"} />
            {guessedLetters.length === matchWordLetters.length ||
            remainingGuessingAttempts === 0 ? (
              <button onClick={setMatch}>Play again</button>
            ) : (
              ""
            )}
          </section>

          <section>
            <ClueMenu />
            <WrongLettersRecipient />
            <MatchWordLettersContainer />
            <SendLetterForm />
          </section>
        </section>
      </main>
    </>
  );
}
