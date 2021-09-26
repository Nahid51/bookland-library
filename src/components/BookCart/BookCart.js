import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import BookName from '../BookName/BookName';

const BookCart = (props) => {
    // console.log(props.addBookToCart);
    const { addBookToCart } = props;
    let totalPrice = 0;
    for (const book of addBookToCart) {
        totalPrice = totalPrice + book.price;
    }
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title"><FontAwesomeIcon icon={faBook} /> Book cart</h5>
                    <p className="card-text">Books Added: {props.addBookToCart.length}</p>
                    <p className="card-text">Total Cost: &#2547; {totalPrice}</p>
                    {
                        props.addBookToCart.map(name => <BookName
                            name={name}
                        ></BookName>)
                    }
                    <a href={'https://silly-kalam-a96823.netlify.app/'} className="btn btn-primary">Buy Now</a>
                </div>
            </div>
        </div>
    );
};

export default BookCart;