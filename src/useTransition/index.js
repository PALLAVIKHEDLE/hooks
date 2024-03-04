import React, { useState, useTransition } from 'react';

function AnimatedText() {
  const [text, setText] = useState('Hello');
  const [isPending, startTransition] = useTransition();

  const changeText = () => {
    startTransition(() => {
      setText(text === 'Hello' ? 'World' : 'Hello');
    });
  };

  return (
    <div>
      <h1>
        {text}
        {isPending && <span style={{ color: 'gray' }}>...</span>}
      </h1>
      <button onClick={changeText}>Change Text</button>
    </div>
  );
}

export default AnimatedText;

