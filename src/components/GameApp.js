import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import ClueMenu from "./ClueMenu";
import MatchWordLettersContainer from "./MatchWordLettersContainer";
import SendLetterForm from "./SendLetterForm";
import SwitchThemeButton from "./SwitchThemeButton";
import WrongLettersRecipient from "./WrongLettersRecipient";

export default function GameApp() {
  const { matchWord, matchWordLetters, wrongLetters, clueCounter } =
    useContext(GameContext);

  if (!matchWord) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <>
      <main>
        <header>
          <h1>Hangman Game</h1>
          <h2>Created by Jackson Paredes Ferranti</h2>
        </header>
        <SwitchThemeButton />

        <section className="hangmanSection"></section>

        <section className="gameplaySection">
          <ClueMenu />
          <WrongLettersRecipient />
          <MatchWordLettersContainer />
          <SendLetterForm />
        </section>
      </main>
    </>
  );
}
