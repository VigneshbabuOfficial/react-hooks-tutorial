import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
  useReducer,
} from "react";
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

const initialState = 0;
const counterReducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

const initialStateObj = { counter: 0 };
const counterReducerObj = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return { counter: state.counter + 1 };

    case "DECREMENT":
      return { counter: state.counter - 1 };

    case "RESET":
      return initialStateObj;

    default:
      return state;
  }
};

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

  let textRef = useRef();
  const textHandler = () => {
    console.log("textRef.current.value = " + textRef.current.value);
  };

  const [count, dispatch] = useReducer(counterReducer, initialState);
  const [count1, dispatch1] = useReducer(counterReducerObj, initialStateObj);



  
  console.log("rendered");
  return (
    <React.Fragment>
      <h3>useState and useEffect</h3>
      <ThemeContext.Provider value={theme}>
        <Toolbar themeHandler={themeHandler} />
        <h3>
          {themes.dark.foreground === theme.foreground
            ? "Dark Mode"
            : "Light Mode"}
        </h3>
      </ThemeContext.Provider>
      <p>------------------------------------------------</p>
      <h3>useCallback</h3>
      <Counter1 count={count_cmp1} />
      <button onClick={counterHandler1}>Counter - 1</button>
      <Counter2 count={count_cmp2} onClickCounter={counterHandler2} />
      <button onClick={counterHandler2}>Counter - 2</button>
      <p>------------------------------------------------</p>
      <h3>useMemo</h3>
      <input type="text" ref={textRef} /> &nbsp;&nbsp;&nbsp;{" "}
      <button onClick={textHandler}>copy</button>
      <br />
      <p>
        You have typed -
        {textRef.current && textRef.current.value
          ? textRef.current.value.toUpperCase()
          : ""}
      </p>
      <p>------------------------------------------------</p>
      <h3>useReducer</h3>
      <h3>Count - {count}</h3>
      <button onClick={() => dispatch("INCREMENT")}>Increment</button>
      <button onClick={() => dispatch("DECREMENT")}>Decrement</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
      <p>------------------------------------------------</p>
      <h3>useReducer (complex state & action)</h3>
      <h3>Count - {count1.counter}</h3>
      <button onClick={() => dispatch1("INCREMENT")}>Increment</button>
      <button onClick={() => dispatch1("DECREMENT")}>Decrement</button>
      <button onClick={() => dispatch1("RESET")}>Reset</button>
    </React.Fragment>
  );
};

export default App;
