import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  getAuth, 
  signInWithPopup, 
  signOut,
  GoogleAuthProvider, 
  GithubAuthProvider 
} from "firebase/auth";


import initializeAuthentication from './Firebase/firebase.initialize';

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();



function App() {

  const [user, setUser] = useState({})

  const auth = getAuth();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const { displayName, email, photoUrl } = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
          photo: photoUrl
        }
        setUser(loggedInUser);
      })
      .catch(error => {
        console.log(error.message, error.code);
      })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      // const credential = GithubAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;

      // The signed-in user info.
      const { displayName, email, photoUrl } = result.user;
      const loggedInUser = {
        name: displayName,
        email: email,
        photo: photoUrl
      }
      setUser(loggedInUser);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      console.log(error.message, error.code);
    });

  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser({});
      console.log('success SignOut');
    }).catch((error) => {
      console.log('error SignOut');
    });
  }



  return (
    <div className="App">
       {
         user?.email?.length ? (<div>
           <h2>Welcome <strong>{ user.name }</strong></h2>
           <button onClick={handleSignOut}>Sign Out</button> 
         </div>
         ): (
           <div>
            <button onClick={handleGoogleSignIn}>Google Sign In</button> 
            <button onClick={handleGithubSignIn}>GitHub Sign In</button>
          </div>
         )
       }

    </div>
  );
}

export default App;
