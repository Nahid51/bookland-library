import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import BookCart from '../BookCart/BookCart';


const Books = () => {
    // set all the books information
    const [books, setBooks] = useState([]);
    // set book name information
    const [addBookToCart, setAddBookToCart] = useState([]);

    useEffect(() => {
        fetch('./books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);

    // set button for showing books information
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