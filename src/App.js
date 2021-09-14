import React, { useState, useEffect, useContext, useCallback } from "react";
import { Toolbar } from "./Toolbar";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";

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

// useCallback should be used for handler and React.memo should be used for respective component

const App = () => {
  const [theme, setTheme] = useState(themes.dark);

  const [count_cmp1, setCount_cmp1] = useState(0);

  const [count_cmp2, setCount_cmp2] = useState(0);

  const themeHandler = useCallback(() => {
    setTheme(
      theme.foreground === themes.light.foreground ? themes.dark : themes.light
    );
  }, [theme]);

  const counterHandler1 = useCallback(() => {
    setCount_cmp1(count_cmp1 + 1);
  }, [count_cmp1]);

  const counterHandler2 = useCallback(() => {
    setCount_cmp2(count_cmp2 + 1);
  }, [count_cmp2]);

  return (
    <React.Fragment>
      <ThemeContext.Provider value={theme}>
        <Toolbar themeHandler={themeHandler} />
        <h3>
          {themes.dark.foreground === theme.foreground
            ? "Dark Mode"
            : "Light Mode"}
        </h3>
      </ThemeContext.Provider>
      <Counter1 count={count_cmp1} />
      <button onClick={counterHandler1}>Counter - 1</button>
      <Counter2 count={count_cmp2} onClickCounter={counterHandler2} />
      <button onClick={counterHandler2}>Counter - 2</button>
    </React.Fragment>
  );
};

export default App;
