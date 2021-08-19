import { div } from 'prelude-ls';
import React from 'react';
import './sign-in-sign-out.scss';
import SignIn from '../../components/sign-in/sign-in'
import SignUp from '../../components/sign-up/sign-up';

const SignInAndSignUpPage = () => {
    return (  
        <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
        </div>
    );
}
 
export default SignInAndSignUpPage;