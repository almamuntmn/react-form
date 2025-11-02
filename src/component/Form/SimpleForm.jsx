import React from 'react';

const SimpleForm = () => {

const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    };

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='your name here' />
        <br />
        <input type="email" name="email" placeholder='your email' />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
};

export default SimpleForm;