import React, { useState, useDeferredValue } from 'react';

function Form() {
  const [input, setInput] = useState('');
  const deferredInput = useDeferredValue(input, { timeoutMs: 1000 });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <h2>Input: {input}</h2>
      <h2>Deferred Input: {deferredInput}</h2>
      <p>The deferred input updates with a delay of 1 second after typing.</p>
    </div>
  );
}

export default Form;
