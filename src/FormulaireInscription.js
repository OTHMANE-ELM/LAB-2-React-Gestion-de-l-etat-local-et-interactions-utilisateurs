import { useState } from 'react';

function FormulaireInsciption() {
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');

  

  function handleSubmit(event) {
    
    event.preventDefault();
    alert(`Le Prenom saisi est : ${prenom}`);
    alert(`Le mail saisi est : ${email}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Prenom :
        <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
      </label>
      <label>
        Email :
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
    <button type="submit">Soumettre</button>  
    </form>
    
  );
}

export default FormulaireInsciption;