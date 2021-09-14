import { ThemedButton } from "./ThemedButton";

export const Toolbar = (props) => {
  return (
    <div>
      <ThemedButton themeHandler={props.themeHandler} />
    </div>
  );
};
