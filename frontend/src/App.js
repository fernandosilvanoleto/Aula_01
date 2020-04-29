import React, { useState } from 'react';

import './global.css';

import Routes from './routes';

// quando o código em html está integrado dentro do js é chamado de JSX
function App() {
  /*
  // conceito de estado
  const [counter, setCounter] = useState(0);

  // usestate retorna duas arrays -> Array [valor, atualização]

  
  function Increment(){
    setCounter(counter + 1);
    //console.log(counter);
  }
  // usando dentro do return
  <div>
      <Header>
        Contador: {counter}
      </Header>
      <!-- <button onClick= {Increment}>Incrementar</button> ->
    </div>
  */

  return (
    <Routes />
  );
}

export default App;
