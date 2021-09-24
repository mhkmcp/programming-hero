import React from 'react';

const Person = (props) => {
    return (
    <div style={{ borderRadius: '10px', border: '3px solid blue', margin: '10px' }}>
      <h3> Name: { props.name }</h3>
      <h4>Email: { props.email }</h4>
    </div>
    );
};

export default Person;