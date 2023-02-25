import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png'
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

const [input, setInput] = useState('');

const agregarInput = value => {
  setInput(input + value);
};

const resultado = () => {
  if (input) {
    setInput(evaluate(input));
  }else {
    alert("No puedo calcular valores vacios!");
  }
};

  return (
    <div className="App">
      <div className='logo-container'>
        <img 
          src={freeCodeCampLogo}
          className='logo'
          alt='Logo ' />
      </div>
      <div className='container-calculator'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton Click={agregarInput}>1</Boton>
          <Boton Click={agregarInput}>2</Boton>
          <Boton Click={agregarInput}>3</Boton>
          <Boton Click={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton Click={agregarInput}>4</Boton>
          <Boton Click={agregarInput}>5</Boton>
          <Boton Click={agregarInput}>6</Boton>
          <Boton Click={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton Click={agregarInput}>7</Boton>
          <Boton Click={agregarInput}>8</Boton>
          <Boton Click={agregarInput}>9</Boton>
          <Boton Click={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton Click={resultado}>=</Boton>
          <Boton Click={agregarInput}>0</Boton>
          <Boton Click={agregarInput}>-</Boton>
          <Boton Click={agregarInput}>/</Boton></div>
        <div className='fila'>
          <BotonClear ClickClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
