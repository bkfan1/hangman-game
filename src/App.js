import { useState, useEffect } from "react";
import GameApp from "./components/GameApp";
import { GameProvider } from "./context/GameContext";
import "./index.scss";

function App() {
  return (
    <>
      <GameProvider>
        <div className="App">
          <GameApp/>
        </div>
      </GameProvider>
    </>
  );
}

export default App;
