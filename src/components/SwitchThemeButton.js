import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function SwitchThemeButton() {
  const { themeMode, handleClickThemeMode } = useContext(GameContext);
  return (
    <>
      <button onClick={handleClickThemeMode} className="switchThemeButton">
        {themeMode === "dark" ? "☀️" : "🌙"}
      </button>
    </>
  );
}
