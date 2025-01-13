import React, { useState } from 'react';
import dayjs from 'dayjs';

function App() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (dayjs(birthdate).isValid()) {
      const today = dayjs();
      const birthdateObj = dayjs(birthdate);
      const age = today.diff(birthdateObj, 'year');
      setAge(age);
    } else {
      setAge(null);
    }
  };

  return (
    <div className="App">
      <h1>Day.js Demo</h1>
      <label>
        Ingrese su fecha de nacimiento:
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </label>
      <button onClick={calculateAge}>Calcular Edad</button>
      {age !== null && (
        <p>
          Tu edad es: {age} año{age !== 1 ? 's' : ''}
        </p>
      )}
      <p>Fecha actual: {dayjs().format('YYYY-MM-DD HH:mm:ss')}</p>
    </div>
  );
}

export default App;

