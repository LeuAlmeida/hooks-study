import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState(['ReactJS', 'React Native']);

  return (
    <ul>
      {tech.map(t => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export default App;
