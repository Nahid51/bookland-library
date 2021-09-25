import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('./books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);

    const handleAddToCart = () => {
        console.log('all ok');
    }

    return (
        <div>
            <h2>Collection of Books in My BookLand</h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-9'>
                        <div className='row'>
                            {
                                books.map(book => <Book
                                    key={book.id}
                                    book={book}
                                    handleAddToCart={handleAddToCart}
                                ></Book>)
                            }
                        </div>

                    </div>
                    <div className='col-md-3'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;