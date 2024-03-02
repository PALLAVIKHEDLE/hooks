import React, { useState, useMemo } from 'react';
import FilteredList from './filteredList'

function ExpensiveComponent({ count }) {
  // Some expensive computation
  function computeExpensiveValue(count) {
    console.log('Computing expensive value...');
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += i;
    }
    return result;
  }

  // Memoize the result of the expensive computation
  const expensiveValue = useMemo(() => computeExpensiveValue(count), [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Value: {expensiveValue}</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(10);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <ExpensiveComponent count={count} />
      <FilteredList/>
    </div>
  );
}

export default App;
