import React from "react";

const Counter2 = React.memo((props) => {
  console.log("Counter2 is rendered");
  return <div>Counter2 is clicked {props.count} times</div>;
});

export default Counter2;
