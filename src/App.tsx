import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [projects, setProjects] = useState<string[]>([]);

  const projectAddHandler = (text: string) => {
    setProjects(prevProjects => [...prevProjects, text]);
  };

  

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
