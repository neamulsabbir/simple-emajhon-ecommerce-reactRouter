import React from 'react';
import'./Cart.css'

const Cart = (props) => {
    const {cart} = props;

    // console.log(cart)

    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping; 
    }
    const tax = total / 10;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart-details'>
            <h2>Order Summary</h2>
            <div className='price-border'>
                <p>Selected Items: ${cart.length} </p> 
                <p>Total Price: ${total}  </p>
                <p>Total Shipping: ${shipping} </p>
                <p>Tax: ${tax} </p>
            </div>
            <p><span>Grand Total: ${grandTotal}</span>  </p>
            {props.children}
            
        </div>
    );
};

export default Cart;