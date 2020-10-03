import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { handleGoogleSignIn, initializeLoginFramework } from './LoginManager';
import "firebase/auth";

const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name:'',
        email:'',
        password:''
    })

    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: {pathname: "/"}};

    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
            // console.log(res);
            handleResponse(res, true);
        })
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if(redirect){
            history.replace(from);
        }
    }
    return (
    
        <div>
            <h1>Welcome,</h1>
            <button onClick={googleSignIn}>Google Sign in</button>
        </div>
    );
};

export default Login;