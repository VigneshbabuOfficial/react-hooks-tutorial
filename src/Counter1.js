import React from "react";

const Counter1 = React.memo((props) => {
  console.log("Counter1 is rendered");
  return <div>Counter1 is clicked {props.count} times</div>;
});

export default Counter1;
