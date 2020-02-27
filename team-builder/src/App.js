import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import DevForm from "./components/DevForm";

function App() {
  const [dev, setDev] = useState([
    {
      id: 1,
      name: 'Zoe',
      email: 'zldpepi@gmail.com',
      role: 'Web Developer'
    }
  ]);

  const addNewDev = props => {
  const newDev = {
   name: props.name,
   email: props.email,
   role: props.role,
  };
  setDev([...dev, newDev]);
}

  return (
    <div className="App">
      <h2>Dev Sign-Up</h2>
      <DevForm addNewDev={addNewDev} />
      <Form dev={dev} />
      </div>
  );
}
    
export default App;
