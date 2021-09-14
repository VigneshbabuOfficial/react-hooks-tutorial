import { ThemedButton } from "./ThemedButton";
import React from "react";

export const Toolbar = React.memo((props) => {
  console.log("Toolbar is rendered");

  return (
    <div>
      <ThemedButton themeHandler={props.themeHandler} />
    </div>
  );
});
