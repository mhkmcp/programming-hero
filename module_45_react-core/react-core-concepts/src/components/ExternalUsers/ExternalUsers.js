import React, { useState, useEffect } from 'react';
import Person from '../Person/Person';

const ExternalUsers = () => {
    const [users, setUsers] = useState([]);

    const personStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        backgroundColor: '#eee',
        margin: '10px',
        padding: '10px',
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, [])

    return (
        <div>
            <h3>Users</h3>
      
            <div className="container" style={ personStyle }>
                {
                users.map((user, index) => <Person key={index} name={user.name} email={user.email} />)
                }
            </div>
        
        </div>
    );
};

export default ExternalUsers;