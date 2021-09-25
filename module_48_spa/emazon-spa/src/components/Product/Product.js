import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
    const { name, img, price, stock, seller, star, starCount } = props.product;
    // console.log(props);
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="product" />
            </div>
            
            <div className="product-detail">
                <h4 className="product-name">{name}</h4>
                <p>by: {seller}</p>
                <div className="product-bottom">
                    <div className="product-left">
                        <p>${price}</p>
                        <p>only {stock} left in stock - order soon</p>
                    </div>
                    <div className="product-right">
                        <p>rating: {star}</p>
                        <h4 className="feature">Feature</h4>
                    </div>
                </div>
                <button 
                    onClick={() => props.handleAddToCart(props.product)}
                    className="cart-btn"
                ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};


export default Product;