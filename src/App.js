import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  // will be calling for every state updates since doesn't have dependency array values
  useEffect(() => {
    // Update the document title using the browser API
    console.log("useEffect - " + count);
    document.title = `You clicked ${count} times`;
  });

  // will be called only once componenet is mounted
  useEffect(() => {
    console.log("useEffect - [] - " + count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //will be calling once state var - count is updated with new value
  useEffect(() => {
    console.log("useEffect - [count] - " + count);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <br />
      <h3>Total Count is : {count}</h3>
    </div>
  );
};

export default App;
