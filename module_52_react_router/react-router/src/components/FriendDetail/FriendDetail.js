import React, { useState, useEffect } from 'react';
import './FriendDetail.css'

import {
    BrowserRouter as Router,
    Link,
    useParams
} from 'react-router-dom'

const FriendDetail = () => {

    // const params = useParams();
    const { id } = useParams();
    console.log('id: ', id);

    const [friend, setFriend] = useState({})

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => setFriend(data));

    }, [id])

    return (
        <Router >
            <h2>Details <small>coming soon... for user with id: { friend.name }</small></h2>

            <Link to='/friends' >Back</Link>
            
        </Router >
    );
};

export default FriendDetail;