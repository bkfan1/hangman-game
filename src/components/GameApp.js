import { useState, useContext } from "react";
import { GameContext } from "../context/GameContext";
import ClueMenu from "./ClueMenu";
import HangmanImage from "./HangmanImage";
import HowToPlayBox from "./HowToPlayBox";
import MatchWordLettersContainer from "./MatchWordLettersContainer";
import SendLetterForm from "./SendLetterForm";
import SwitchThemeButton from "./SwitchThemeButton";
import WrongLettersRecipient from "./WrongLettersRecipient";

export default function GameApp() {
  const {
    setMatch,
    matchWord,
    themeMode,
    matchWordLetters,
    guessedLetters,
    remainingGuessingAttempts,
  } = useContext(GameContext);

  const [revealHelp, setRevealHelp] = useState(false);

  return (
    <>
      <main className={`${themeMode === "dark" ? "darkTheme" : ""}`}>
        <header>
          <h1>Hangman Game</h1>
          <h2>Created by Jackson Paredes Ferranti</h2>
        </header>
        <menu className="linksMenu">
          <a href="https://www.github.com/bkfan1" title="Github profile">
            <i className="bi bi-github" />
          </a>
          <a href="mailto:jacksonpf177@gmail.com" title="Send email">
            <i className="bi bi-envelope-fill" />
          </a>
        </menu>
        <SwitchThemeButton />

        <section className="gameplaySection">
          <div className="gameUISection">
            <aside className="hangmanSection">
              <HangmanImage />
              {matchWordLetters.length === guessedLetters.length ||
              remainingGuessingAttempts === 0 ? (
                <>
                <h1>The word was: {matchWord}</h1>
                <button onClick={setMatch} style={{marginTop:"10px"}}>Play again</button>
                </>
              ) : (
                ""
              )}
            </aside>

            <aside className="lettersSection">
              <div className="clueAndWrongLettersSection">
                {matchWordLetters.length === guessedLetters.length ||
                remainingGuessingAttempts === 0 ? (
                  ""
                ) : (
                  <ClueMenu />
                )}
                <WrongLettersRecipient />
              </div>

              <div className="matchInputSection">
                <MatchWordLettersContainer />
                {matchWordLetters.length === guessedLetters.length ||
                remainingGuessingAttempts === 0 ? (
                  ""
                ) : (
                  <SendLetterForm />
                )}
              </div>
            </aside>
          </div>
          <HowToPlayBox />
        </section>
      </main>
    </>
  );
}
