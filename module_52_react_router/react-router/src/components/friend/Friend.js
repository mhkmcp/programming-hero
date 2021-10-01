import React from 'react';
import './Friend.css'

import { Link  } from 'react-router-dom';
import { useHistory  } from 'react-router';

const Friend = (props) => {
    const { id, name, username, email, phone } = props.friend;

    const history = useHistory();

    const url = `/friend/${id}`;
    
    const handleVisitClick = () => {
        // console.log('history: ', history);
        history.push(`friend/${id}`);
    }
    

    return (
        <div className="friend">
            <h2>{ name }</h2>
            <h4>{ username }</h4>  
            <h6>{ email }</h6> 
            <p><strong>{ phone }</strong></p>    
            <Link to={url} >Visit @{ username }</Link>     
            <br />
            <Link to={url} >
                <button>Visit Me</button>
            </Link> 
            <br />
            <button onClick={ handleVisitClick }>Visit Clicking Me</button>
        </div>
    );
};

export default Friend;