import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import DevForm from "./DevForm";

function App() {
  const [ devName, setDevName ] = useState([
    {
      name: 'Sans Undertale',
      email: 'sans@undertale.com',
      role: 'skeleton'
    }
  ]);

  const addNewDev = dev => {
  const newDev = {
   name: dev.name,
   email: dev.email,
   role: dev.role,
  };
  setDevName([...devName, dev]);
}

  return (
    <div className="App">
      <h2>Dev Sign-Up</h2>
      <DevForm addNewDev={addNewDev} />
      <Form devName={devName} />
      </div>
  );
}
    

export default App;
