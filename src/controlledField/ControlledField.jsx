import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword]= useState('');
    const [error, setError]=useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.email.value);
        console.log(event.target.password.value);
    };

    const handlePasswordChange = (event) => {
        console.log(event.target.value);
        setPassword(event.target.value)

        if (password.length < 8) {
            setError('password must be at least 8 characters')
        }
        else {
            setError('')
        }   
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="" placeholder='your email' required />
                <br />
                <input type="password" name="password" id="" onChange={handlePasswordChange} defaultValue={password} required placeholder='your password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>{error}</p>
        </div>
    );
};

export default ControlledField;