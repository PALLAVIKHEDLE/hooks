import React, { useState, useMemo } from 'react';

function FilteredList({ list, filter }) {
  // Memoize the filtered list based on the original list and filter value
  const filteredList = useMemo(() => {
    console.log('Filtering list...');
    return list.filter(item => item.includes(filter));
  }, [list, filter]);

  return (
    <ul>
      {filteredList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  const [filter, setFilter] = useState('');
  const list = ['apple', 'banana', 'orange', 'grape', 'pineapple'];

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder="Filter list..."
      />
      <FilteredList list={list} filter={filter} />
    </div>
  );
}

export default App;
