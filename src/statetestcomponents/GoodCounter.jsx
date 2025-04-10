import { useState } from 'react';

function GoodCounter() {
  const [count, setCount] = useState(0);

  // SOLUTION: This works correctly!
  const incrementTwice = () => {
    setCount(prev => prev + 1); // First update
    setCount(prev => prev + 1); // Second update (uses UPDATED value)
  };

  return (
    <div>
      <h2>Fixed Counter</h2>
      <p>Current count: {count}</p>
      <button onClick={incrementTwice}>
        Increment Twice
      </button>
      <p>Now it correctly increases by 2 each click!</p>
    </div>
  );
}

export default GoodCounter