import React from 'react';

const BookName = (props) => {
    const { name } = props.name;
    return (
        <div> {/* showing each book name */}
            <small>Book Name: {name}</small>
        </div>
    );
};

export default BookName;