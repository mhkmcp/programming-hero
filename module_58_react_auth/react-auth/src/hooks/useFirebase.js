import { useEffect, useState } from "react";
import firebaseInialization from "../Firebase/firebase.initialize";

import { 
    getAuth, 
    signOut,
    signInWithPopup, 
    GoogleAuthProvider,
    GithubAuthProvider,
    onAuthStateChanged 
} from "firebase/auth";

firebaseInialization();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            }).catch((error) => {
                setError(error.message);
            }
        );
    }

    const signInWithGitHub = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUser(result.user);
                console.log(result.user);
            }).catch((error) => {
                setError(error.message);
                console.log(error.message);
            }
        );
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        })
    }, []); 

    return {
        user,
        error,
        logOut,
        signInWithGoogle,
        signInWithGitHub
    };


}

export default useFirebase;