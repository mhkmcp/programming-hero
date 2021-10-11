import React, { useState, useEffect } from 'react';

import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
} from "firebase/auth";

import './App.css';

import initializeAuthentication from './Firebase/firebase.initialize';

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const auth = getAuth();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      }).catch((error) => {
        console.log(error.message, error.code);
        setError(error.message);
      });
  }

  const handleEmailBlur = e => {
    setEmail(e.target.value);
  }

  const handlePasswordBlur = e => {
    setPassword(e.target.value);
  }

  const handleRegister = event => {
    event.preventDefault();
    if(password.length < 6) {
      setError('Password must be at least 6 character');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('user: ', user);
        // verify emaill 
        varifyEmail();
        setIsRegister(true);
      })
      .catch((error) => {
        console.log(error.message, error.code);
        setError(error.message);
      });
  }

  const handleLogin = e => {
    e.preventDefault();
    if(password.length < 6) {
      setError('Password must be at least 6 character');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('user: ', user);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error.message, error.code);
        setError(error.message);
      });
  }

  const varifyEmail = () => {
    sendEmailVerification(auth.currentUser)
    .then((result) => {
      // Email verification sent!
      console.log('vaerifyEmail: ', result);
    });
  }

  return (
    <div className="App row">
      {
        isLoggedIn === true && <h2>Logged In</h2>
      }

       <button onClick={handleGoogleSignIn}>Sign In Google</button>
       <div className="form sign-in row">
      {/* { */}
        {/* isRegister === false &&  !isLoggedIn ?  */}
          <form className="col-6" onSubmit={ handleRegister }>
            <h2 className="text-align">
              Register Form
            </h2>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                required
                onBlur={ handleEmailBlur }
              />
            </div>
  
            <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="password"
                required
                onFocus={()=>setError('')}
                onBlur={ handlePasswordBlur }
                />
            </div>
            <button type="submit" className="primary">Register</button>
            <br />
            {
              error.length > 1 && <div className="mb-3">
              <h5 className="text-danger">
              { error }
              </h5>
            </div>
            }
          </form>
        // ): (
          <form className="col-6" onSubmit={ handleLogin }>
            <h2 className="text-align">
              Login Form
            </h2>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                required
                onBlur={ handleEmailBlur }
              />
            </div>
  
            <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="password"
                required
                onFocus={()=>setError('')}
                onBlur={ handlePasswordBlur }
                />
            </div>
            <button type="submit" className="primary">Register</button>
            <br />
            {
              error.length > 1 && <div className="mb-3">
              <h5 className="text-danger">
              { error }
              </h5>
            </div>
            }
          </form>

        {/* ) */}
      {/* } */}
      </div>

    </div>
  );
}

export default App;
