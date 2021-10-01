import React, { useState, useEffect } from 'react';
import Friend from '../friend/Friend';

import './Friends.css'

const Friends = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, [])


    return (
        <div className="container">
            <h2>Friends </h2>
            <div className="friends g-4">
                {
                    users.length && users.map(user => <Friend 
                        key={user.username} 
                        friend = {user}
                    ></Friend>)
                }
            </div>
            
        </div>
    );
};

export default Friends;