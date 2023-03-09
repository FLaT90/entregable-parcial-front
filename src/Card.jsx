//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import React from 'react';

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
