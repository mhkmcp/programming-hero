import React from 'react';

import Person from './components/Person/Person';
import Counter from './components/Counter/Counter';
import UseEffect from './components/UseEffect/UseEffect';
import ExternalUsers from './components/ExternalUsers/ExternalUsers';

import './App.css';


function App() {

  const personStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    backgroundColor: '#eee',
    margin: '10px',
    padding: '10px',
  };

  const heroes = ["Zakir Nayik", "Yusuf Estes", "Ahmadullah"];

  const persons = [
    { name: 'Humayun Kabir', city: 'Sylhet' },
    { name: 'Ashid Ali', city: 'Moulvi Bazar' },
    { name: 'Arob Ali', city: 'Sylhet' },
  ]

  return (
    <div className="App">

      <UseEffect />

      <ExternalUsers />

      <Counter />

      <h3>Favourite Islamic Schoolars</h3>

      <ul>
        {
          heroes.map( (hero, index) => <li key={index}>{hero}</li>)
        }
      </ul>

        <div className="container" style={personStyle}>
          {
            persons.length ? persons.map( (person, index) =>  
              <Person key={index} name={person.name} city={person.city} />
              ) : (
                <h4>No Person Available!</h4>
              )
          }
        </div> 
    </div>
  );
}

export default App;
