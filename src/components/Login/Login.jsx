import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../../firebase.init.js"
const Login = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const clickHandler=()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
        }).catch((error) => {
          console.log(error.message);
        });
    }
    return (
        <div>
            
            <button onClick={clickHandler}>Google Authentication</button>
        </div>
    );
};

export default Login;