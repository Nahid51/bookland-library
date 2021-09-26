import React from 'react';

const BookCart = (props) => {
    console.log(props);
    const { addBookToCart } = props;
    let total = 0;
    for (const book of addBookToCart) {
        total = total + book.price;
    }
    return (
        <div>
            <h3>Books Added: {props.addBookToCart.length}</h3>
            <h5>Total Cost:{total}</h5>
        </div>
    );
};

export default BookCart;