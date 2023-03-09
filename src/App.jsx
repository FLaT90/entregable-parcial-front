import React, { useState } from 'react';
import Card from './Card';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim().length < 3 || name.trim().startsWith(' ')) {
      setError('El nombre debe tener al menos 3 caracteres y no puede empezar con un espacio');
    } else if (age.trim().length < 1 || age < 18) {
      setError('La edad debe ser mayor o igual a 18');
    } else {
      setError('');
      setFormSubmitted(true);
    }
  };

  return (
    <div className="root">
      <div className="App">
        <h1>Formulario</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />
          </div>
          <div>
            <label htmlFor="age">Edad:</label>
            <input type="number" id="age" value={age} onChange={handleAgeChange} />
          </div>
          <button type="submit">Enviar</button>
        </form>
        {error && <p>{error}</p>}
        {formSubmitted && !error && <Card name={name} age={age} />}
      </div>
    </div>
  );
}

export default App;
