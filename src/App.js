import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <br />
      <h3>Total Count is : {count}</h3>
    </div>
  );
};

export default App;
