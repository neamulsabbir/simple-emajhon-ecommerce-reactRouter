import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../product/Products';
import'./Shop.css'

const Shop = () => {
    const [products,setProducts] = useProducts();
    const [cart,setCart] =useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleToCart = (selectedProduct) =>{
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        <div className='shop-container'>
            <div className='product-card'>
                {
                    products.map ( product => <Products 
                        product = {product}
                        handleToCart ={handleToCart}
                        key={product.id}>
                        </Products>) 
                }
                
                
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button className='review-btn'>Review Items</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;