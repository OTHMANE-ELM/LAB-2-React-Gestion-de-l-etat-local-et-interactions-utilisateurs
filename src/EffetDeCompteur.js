import { useState, useEffect } from 'react';

function EffetCompteur() {
  const [clics, setClics] = useState(0);

  useEffect(() => {
    document.title = `Your Cliced ${clics} times`;
  }, [clics]);

  function incrementer() {
    setClics(clics + 1);
  }

  return (
    <div>
      <p>Vous avez cliqué {clics} fois</p>
      <button onClick={incrementer}>Cliquer</button>
    </div>
  );
}

export default EffetCompteur;