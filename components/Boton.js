import React from "react";
import '../stylesheets/Boton.css'

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !=='.') && (valor !=='=');
  };

  return (
    <div
      className={`container-boton ${esOperador(props.children) ? 'operador' : ''} `} 
      onClick={() => props.Click(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;