import React, { useState } from 'react';

const DevForm = props => {
    console.log('props', props);
    const [dev, setDev] = useState({
        name: '',
        email: '',
        role: ''
    });

    const onInputChange = event => {
        event.preventDefault();
        props.addNewDev(dev);
        setDev({...dev, [event.target.name]: event.target.value
        });
    };

    const onSubmitForm = event => {
        event.preventDefault();
        props.addNewDev(dev);
        setDev({
            name: '',
            email: '',
            role: ''
        });
    };

    return (
        <form onSubmit={onSubmitForm}>
            <label htmlFor='Name'>Name: </label>
            <input
                name='Name'
                id='name'
                type='text'
                placeholder="Ada Lovelace"
                onChange={onInputChange}
                value={dev.name}
            />
            <br />
            <label htmlFor='Email'>Email: </label>
            <input
                name='Email'
                id='email'
                type='text'
                placeholder='adalovelace@gmail.com'
                onChange={onInputChange}
                value={dev.email}
                />
            <br />
            <label htmlFor='Role'>Role: </label>
            <input
             name='Role'
             id='role'
             type='text'
             placeholder='Full-Stack Developer'
             onChange={onInputChange}
             value={dev.role}
             />
             <br />
             <button type='submit'>Submit</button>
        </form>
    );
};

export default DevForm;