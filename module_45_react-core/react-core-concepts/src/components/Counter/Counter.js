import React, { useState, useEffect } from 'react';


const Counter = () => {

    const [count, setCount] = useState(0);

    const IncrementFunc = () => {
      setCount(count + 1);
    }
    const DecrementFunc = () => {
      setCount(count - 1);
    }
  
    useEffect( () => {
      console.log('useEffect invoked');
    }, [count]);

    return (
        <div>
            <h4>Count: {count}</h4>
            <button onClick={IncrementFunc}>Plus 1</button>
            <button onClick={() => setCount(count + 1)}>Inc 1</button>
            <br />
            <button onClick={DecrementFunc}>Minus 1</button>
            <button onClick={() => setCount(count - 1)}>Dec 1</button>
            
        </div>
    );
};

export default Counter;