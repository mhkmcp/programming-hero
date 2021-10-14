import React from 'react';
import { Link } from "react-router-dom";
import useFirebase from '../../hooks/useFirebase';

import './Header.css'


const Header = () => {

    const { user, logOut } = useFirebase();

    return (
        <div className="header">
            {
                user?.displayName &&  <h2>Welcome { user.displayName }</h2>
            }
            <Link to="/home">Home</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/placeorder">Place Order</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>    
            { 
                user?.email && <button onClick={logOut}>Log Out</button> 
            }        
        </div>
    );
};

export default Header;