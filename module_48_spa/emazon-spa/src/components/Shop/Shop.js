import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

import './Shop.css'
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [displayProduct, setDisplayProduct] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                console.log('data: ', data);
                setProducts(data)
                setDisplayProduct(data)
            })
       
    }, [])

    useEffect(()=>{
        if(products.length) {
            const savedCart = getStoredCart();
            let cartProducts = [];
            for(const key in savedCart) {
                const cartProduct = products.find(product => product.key === key)
                if(cartProduct) {
                    const quantity = savedCart[key];
                    cartProduct.quantity = quantity;
                    cartProducts = [...cartProducts, cartProduct];
                }
            }
            setCart(cartProducts);
        }
        
    }, [products])


    const handleAddToCart = (product) => {
        console.log('clicked: ', product.name)
        const newCart = [...cart, product];
        setCart(newCart);
        
        // save to local storage 
        addToDb(product.key);
    }

    const handleSearch = e => {
        const searchText = e.target.value;

        const searchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProduct(searchedProducts);

    }

    return (
        <div>      
            <div className="search-container">
                <input onChange={handleSearch} 
                    type="text" 
                    name="" id="" 
                    placeholder="Search Product"
                />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    <h3>Products: {displayProduct.length}</h3>
                    {
                        displayProduct.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        />)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart} />
                </div>
            </div>
            </div>
    );
};

export default Shop;