import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

    const { signInWithGoogle, signInWithGitHub } = useFirebase();


    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={ signInWithGoogle }>Google Sign In</button>
            <br />
            <button onClick={ signInWithGitHub }>GitHub Sign In</button>
            {/* GitHub SignIn is not ready yet */}
            <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;