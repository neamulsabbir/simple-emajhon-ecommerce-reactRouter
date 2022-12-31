import React from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Products = (props) => {
    // console.log(props)

    const {img, name, price, quantity,ratings,} = props.product

    return (
        <div className='product-container'>
            <img className='product-img' src={img} alt=''></img>
            <div className='product-details'>
                <h3>{name}</h3>
                <p><small>Price: {price}</small></p>
                <p><small>Quantity: {quantity}</small></p>
                <p><small>Ratings: {ratings}</small></p>
            </div>
            <button onClick={() => props.handleToCart(props.product)} className='btn-container'>
                <p className='cart-btn'>Add to cart</p>
                <FontAwesomeIcon className='cart-icon' icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;