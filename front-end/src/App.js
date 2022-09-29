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
