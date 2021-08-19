import { div } from 'prelude-ls';
import React from 'react';
import './sign-in-sign-out.scss';
import SignIn from '../../components/sign-in/sign-in'


const SignInAndSignUpPage = () => {
    return (  
        <div className="sign-in-and-sign-up">
        <SignIn/>
        </div>
    );
}
 
export default SignInAndSignUpPage;