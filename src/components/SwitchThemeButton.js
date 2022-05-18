import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function SwitchThemeButton() {
  const { themeMode, handleClickThemeMode } = useContext(GameContext);

  return (
    <>
      <button
        title={`Switch to: ${themeMode === "dark" ? "Light" : "Dark"} theme`}
        onClick={handleClickThemeMode}
        className="switchThemeButton"
      >
        {themeMode === "dark" ? "☀️" : "🌙"}
      </button>
    </>
  );
}
