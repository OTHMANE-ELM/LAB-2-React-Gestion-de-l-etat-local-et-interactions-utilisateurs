import { useState } from 'react';

function NmbreClics() {
  const [nombre, setNombre] = useState(0);

  const messages = ['Cliquez ','First clic !','Second clic !','Third clic !'];

  function changerMessage() {
    if (nombre < messages.length - 1) {
      setNombre(nombre + 1);
    }
  }

  return (
    <div>
      <p>{messages[nombre]}</p>
      <button onClick={changerMessage}>Cliquer</button>
    </div>
  );
}

export default NmbreClics;