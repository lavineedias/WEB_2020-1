import React from 'react';
import data from './data';
import Dados from '../Questao1/Questao1';

function App() {
    return (
      <div className="wrapper">
        <h1>Dados</h1>
        {data.map(dado =>(
          <Dados 
            key= {dado.name}
            name={dado.name}
            curso={dado.curso}
            cidade={dado.cidade}
            />

        ))}
    </div>
    )
}
  
  export default App;
