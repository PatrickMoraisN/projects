import React from 'react';
import RoutesComponents from './routes';
import { CreateGlobalStyle } from './styles/global';
function App() {
  return (
    <>
      <CreateGlobalStyle />
      <RoutesComponents />
    </>
  );
}

export default App;
