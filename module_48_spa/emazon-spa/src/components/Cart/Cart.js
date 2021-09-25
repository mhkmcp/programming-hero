import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart, typeof cart)

    const itemsPriceReducer = (previous, product) => previous + product.price;
    const itemsPrice = cart.reduce(itemsPriceReducer, 0);

    const shippingReducer = (previous, product) => previous + product.shipping;
    const shipping = cart.reduce(shippingReducer, 0);

    // for (const product of cart) {
    //     itemsPrice += product.price;
    //     shipping += product.shipping;
    // }
    const tax = itemsPrice * 0.2;
    const totalPrice = itemsPrice + shipping + tax;

    return (
        <div className="cart-container">
            <h3>Order Summery</h3>
            <h4 className="items-order">Items Ordered { cart.length }</h4>
            <p>Items <span>${ itemsPrice.toFixed(2) }</span></p>
            <p>Shipping Handling <span>${shipping.toFixed(2)}</span></p>
            <p>Total before tax <span>${(itemsPrice + shipping).toFixed(2)}</span></p>
            <p>Estimated tax <span>${tax.toFixed(2)}</span></p>
            <h4 className="order-total">Order Total <span>${ totalPrice.toFixed(2) }</span> </h4>

            <button className="review-btn">Review your cart</button>
            
        </div>
    );
};

export default Cart;