import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
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

                        <div>
                            <div className='mt-3 w-75'>
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://fivebooks.com/app/uploads/2010/01/8998388.jpg"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://fivebooks.com/app/uploads/2011/10/0312863551.01.LZ_.jpg"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://fivebooks.com/app/uploads/2015/02/0307346617.01.LZ_.jpg"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://fivebooks.com/app/uploads/books/BC_0441007317.jpg"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://fivebooks.com/app/uploads/2010/11/0156001314.01.LZ_.jpg"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://fivebooks.com/app/uploads/2012/04/war-and-peace-hardback-768x1389.jpeg"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://fivebooks.com/app/uploads/2010/01/0140268529.01.LZ_.jpg"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://fivebooks.com/app/uploads/2010/01/71ILek0FyCL-768x1200.jpg"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://fivebooks.com/app/uploads/2010/01/006147875X.01.LZ_.jpg"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/The_Time_Machine_%28H._G._Wells%2C_William_Heinemann%2C_1895%29_title_page.jpg/330px-The_Time_Machine_%28H._G._Wells%2C_William_Heinemann%2C_1895%29_title_page.jpg"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>

                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;