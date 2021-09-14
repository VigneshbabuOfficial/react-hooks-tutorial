import React, { useState, useEffect, useContext } from "react";
import { Toolbar } from "./Toolbar";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = React.createContext();

const App = () => {
  const [theme, setTheme] = useState(themes.dark);
  const themeHandler = () => {
    setTheme(
      theme.foreground === themes.light.foreground ? themes.dark : themes.light
    );
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar themeHandler={themeHandler} />
      <h3>
        {themes.dark.foreground === theme.foreground
          ? "Dark Mode"
          : "Light Mode"}
      </h3>
    </ThemeContext.Provider>
  );
};

export default App;
