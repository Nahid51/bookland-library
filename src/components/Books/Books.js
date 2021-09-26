import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import BookCart from '../BookCart/BookCart';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [addBookToCart, setAddBookToCart] = useState([]);

    useEffect(() => {
        fetch('./books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);


    const handleAddToCart = (addBook) => {
        const newBookToCart = [...addBookToCart, addBook];
        setAddBookToCart(newBookToCart);

    }
    return (
        <div>
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
                        <BookCart
                            addBookToCart={addBookToCart}
                        ></BookCart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;