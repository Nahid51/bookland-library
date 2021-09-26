import React from 'react';

const BookName = (props) => {
    const { name } = props.name;
    return (
        <div>
            <p>Name: {name}</p>
        </div>
    );
};

export default BookName;