import React from 'react';
import './Book.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Book = (props) => {
    const { img, name, writter, publisher, totalPage, language, price } = props.book;
    return (
        <div className='col-md-4'>
            <div className='rounded each-book'>
                <div className='text-center book-img'>
                    <img className='rounded' src={img} alt="" />
                </div>
                <div className='container'>
                    <h3 style={{ fontSize: '16px' }}><b>Book Name:</b> {name}</h3>
                    <p><b>Writter:</b> {writter}</p>
                    <p><b>Publisher:</b> {publisher}</p>
                    <p><b>TotalPage:</b> {totalPage}</p>
                    <p><b>Language:</b> {language}</p>
                    <p><b>Price:</b> &#2547; {price}</p>
                </div>
                <div className='text-center'>
                    <button onClick={() => props.handleAddToCart(props.book)} className='btn-grad'><FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Book;