import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';

function App() {
  return (
    <div className="App">
      <span className="logo">TRYBE - Grupo 16 - acertando a branch2</span>
      <object className="rocksGlass" type="image/svg+xml" data={rockGlass}>
        Glass
      </object>
    </div>
  );
}

export default App;
