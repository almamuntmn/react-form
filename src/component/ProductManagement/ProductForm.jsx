import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {

    const [error, setError] = useState('');

const handleSubmit = (event) => {
        event.preventDefault();


        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;

        // validation
        if (name.length ===0) {
            setError('Name is required');
            return;
        }
        else if (price.length ===0) {
            setError('Price is required');
            return;
        }
        else if (quantity.length ===0) {
            setError('Quantity is required');
            return;
        }
        else {
            setError('');
            
        }

        const newProduct = {
            name:name,
            price:price,
            quantity:quantity
        }
        console.log(newProduct);
        handleAddProduct(newProduct);
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Product Name' />
                <br />
                <input type="text" name='price' placeholder='Product Price' />
                <br />
                <input type="text" name='quantity' placeholder='quantity' />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color:'red'}}>{error}</p>
        </div>
    );
};

export default ProductForm;