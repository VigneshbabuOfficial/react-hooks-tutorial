import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./App";

export const ThemedButton = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <button
      style={{ background: theme.background, color: theme.foreground }}
      onClick={props.themeHandler}
    >
      I am styled by theme context!
    </button>
  );
};
