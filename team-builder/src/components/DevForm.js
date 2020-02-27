import React, { useState } from 'react';

const DevForm = props => {
  console.log('props', props)
  const [dev, setDev] = useState({
    name: '',
    email: '',
    role: ''
  });

  const handleChanges = e => {
    setDev({
      ...dev,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewDev(dev);
    setDev({
      name: '',
      email: '',
      role: ''
    });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor='Name'>Name: </label>
      <input 
        id="name"
        type='text'
        name='name'
        onChange={handleChanges}
        value={dev.name}
        placeholder="Ada Lovelace"
      />
      <br />
      <label htmlFor='Email'>Email: </label>
      <input
        id='email'
        type='text'
        name='email'
        onChange={handleChanges}
        value={dev.email}
        placeholder='adalovelace@gmail.com'
      />
      <br />
      <label htmlFor='Role'>Role: </label>
      <input
        id='role'
        type='text'
        name='role'
        value={dev.role}
        onChange={handleChanges}
        placeholder='Full-Stack Developer'
      />
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default DevForm;