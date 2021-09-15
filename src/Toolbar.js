import { ThemedButton } from "./ThemedButton";
import React from "react";

export const Toolbar = React.memo((props) => {
  console.log("Toolbar is rendered");

  return <ThemedButton themeHandler={props.themeHandler} />;
});
