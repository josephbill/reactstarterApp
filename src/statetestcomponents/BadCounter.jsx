import { useState } from 'react';

function BadCounter() {
  const [count, setCount] = useState(0);

  // PROBLEM: This won't work as expected!
  const incrementTwice = () => {
    setCount(count + 1); // First update (uses current count)
    setCount(count + 1); // Second update (uses SAME count value!)
  };

  return (
    <div>
      <h2>Broken Counter</h2>
      <p>Current count: {count}</p>
      <button onClick={incrementTwice}>
        Increment Twice
      </button>
      <p>Click the button - it only increases by 1, not 2!</p>
    </div>
  );
}

export default BadCounter