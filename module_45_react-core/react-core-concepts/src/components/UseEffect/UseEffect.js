import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [x, setx] = useState(0);
    const [y, sety] = useState(0);
    const [z, setz] = useState(0);

    useEffect(() => {
        console.log('state changed, yooo.......!', x,  z);
    }, [x, z])

    return (
        <div>
            <h2>Use Effect Exploring</h2>
            <h3>
                X: <strong>{x}</strong> 
                <button onClick={()=> setx(x+1)}> + </button> 
                <button onClick={()=> setx(x-1)}> - </button>
                </h3>
                <h3>
                Y: <strong>{y}</strong> 
                <button onClick={()=> sety(y+1)}> + </button> 
                <button onClick={()=> sety(y-1)}> - </button>
                </h3>
                <h3>
                Z: <strong>{z}</strong> 
                <button onClick={()=> setz(z+1)}> + </button> 
                <button onClick={()=> setz(z-1)}> - </button>
            </h3>
            
        </div>
    );
};

export default UseEffect;