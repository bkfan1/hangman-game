import { useState } from "react";

export default function HowToPlayBox() {
  const [revealHelp, setRevealHelp] = useState(false);
  return (
    <>
      <figure className="howToPlayBox">
        <header>
          <h1>How to play</h1>
          <button
            onClick={() => setRevealHelp(!revealHelp)}
            className={`bi bi-chevron-${revealHelp ? "up" : "down"}`}
          ></button>
        </header>
        <p className={`howToPlayBox_p ${revealHelp ? "" : "p-is-hidden"}`}>
            You are shown a set of blank letters that match a word or phrase and
            you have to guess what these letters are to reveal the hidden word.
            You guess by sending a letter from an input in the UI. If you send a
            letter that is in the word the letter is revealed from the blank
            letters; however, if you pick a letter that is not in the word, then
            the letter you sent its going to be added in a "wrong letters"
            recipient and stickman is slowly drawn.
          </p>

      </figure>
    </>
  );
}
