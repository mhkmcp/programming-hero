import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {

  const [users, setusers] = useState([]);
  const nameRef = useRef();
  const occupationRef = useRef();

  useEffect(() => {
    fetch('http://localhost:4000/users')
    .then(res => res.json())
    .then(data => setusers(data));
  }, [])

  const submitHandler = e => {
    e.preventDefault();
    const name = nameRef.current.value;
    const occupation = occupationRef.current.value;

    const data = {name: name, occupation: occupation};
    // const data = { name, occupation}; both works good

    console.log('data: ', data);

    // send data to backend 
    fetch('http://localhost:4000/users', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)

    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const addedUser = data;
      const newUsers = [...users, addedUser];
      setusers(newUsers);

      nameRef.current.value = '';
      occupationRef.current.value = '';
    });

  }

  return (
    <div className="App">
      <h3>Add New User</h3>

      <form onSubmit={submitHandler}>
        <input type="text" ref={nameRef} placeholder="name"/>
        <input type="text" ref={occupationRef} placeholder="occupation"/>
        <input type="submit" value="Add" />
      </form>
      <h3>Here Found { users.length } Users</h3>
      <ul>
        {
          users && users.map(user => <li key={user.id}><h3>
              { user.id }: { user.name }
            </h3>
            <p>{ user.occupation }</p>
            </li>)
        }
      </ul>
    </div>
  );
}

export default App;
