import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState(['ReactJS', 'React Native']);

  function handleAdd() {
    setTech([...tech, 'Node.js']);
  }

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <button onClick={handleAdd}>Adicionar</button>
    </>
  );
}

export default App;
