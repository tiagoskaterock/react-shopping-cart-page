import React, { useState } from 'react';
import Counter from './components/Counter'
import Counters from './components/Counters'
import Navbar from './components/Navbar'
import counters from "./data/counters"

function App() {

  function minhaFuncao() {
    console.log('Esta função está sendo executada a cada segundo.');
    // Coloque o código que deseja executar a cada segundo aqui
  }

  setInterval(minhaFuncao, 1000);

  return (
    <div>
      <Navbar totalCounters={counters.length} />
      <div className="container">
        <Counters counters={counters} />
      </div>
    </div>
  );
}

export default App;
