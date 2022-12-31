import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './AddCart.css'

const AddCart = (props) => {
    console.log(props)
    const {cartItem,handleRemoveItem} = props
    const {img,name,price,shipping,quantity,seller} = cartItem
    return (
        <div className='review-container'>
            <div>
                <img src={img} alt=''></img>
            </div>
            <div className='review-details'>
                <div className='review-items'>
                    <h3>{name}</h3>
                    <p>price: <span>${price}</span></p>
                    <p>Shipping Charge: <span>${shipping}</span></p>
                    <p>Quantity: {quantity}</p>
                    <p>Seller: {seller}</p>
                </div>
                <div onClick={() => handleRemoveItem(cartItem)} className='icon-container'>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </div>
            </div>
            
        </div>
    );
};

export default AddCart;