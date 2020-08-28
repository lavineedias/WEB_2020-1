import React from 'react';
import Hero from './components/questão1/Hero';
import Enemy from './components/questão1/Enemy'
import Arena from './components/questão1/Arena'
import World from './components/questao2/World';





export default function App() {
  return (
    <div>
      <World>
      <Arena arena='Terra'>
      <Hero name=' Superman'>
      
      </Hero>
      <Enemy name= 'Lexluthor'/>
      </Arena>
    
      <Arena arena='Água'>
      <Hero name='Capitão Ámerica'/>
      <Enemy name= 'Thanos'/>
      </Arena>
    
      </World>
    
    </div>
  );
}

