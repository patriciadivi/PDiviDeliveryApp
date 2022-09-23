import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import IndexRouter from './routes';

function App() {
  return (
    <BrowserRouter>
      <IndexRouter />
    </BrowserRouter>
  );
}
export default App;

// import React from 'react';
// import './App.css';
// import rockGlass from './images/rockGlass.svg';

// function App() {
//   return (
//     <div className="App">
//       <span className="logo">TRYBE - Grupo 16 - really final</span>
//       <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
//         Glass
//       </object>
//     </div>
//   );
// }

// export default App;
