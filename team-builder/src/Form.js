import React from 'react';

const Form = props => {
    return (
        <div>
            {props.devName.map(dev => (
                <div key={dev.id}>
                    <p>{dev.name}</p>
                    <p>{dev.email}</p>
                    <p>{dev.role}</p>
                </div>
            ))}
        </div>
    );
};

export default Form;