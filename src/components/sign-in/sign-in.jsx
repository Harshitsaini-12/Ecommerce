import React from 'react';
import './sign-in.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button'
import {auth,signInWithGoogle} from '../../firebase/firebase.util';


class SignIn extends React.Component{

    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

 handleSubmit = async event => {
     event.preventDefault();

     const {email,password}=this.state;
    
    try{
        await auth.signInWithEmailAndPassword(email,password);
        this.setState({email:'',password:''})
    }catch(error){
        console.log(error);
    }
 }

 handleChange = event => {

    const {value,name}=event.target;

    this.setState({[name]:value})

 }

render(){
    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your Email and Password</span>

         {/* form for the sigin page */}
         <form onSubmit={this.handleSubmit}>
         <FormInput 
         name="email" 
         type="email" 
         handlechange={this.handleChange} 
         value={this.state.email} 
         label='Email'
         required />

         <FormInput
         name="password" 
         type="password" 
         handlechange={this.handleChange}
         value={this.state.password} 
         label='Password'
         required />
        
        <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
            </CustomButton>
        </div>

         </form>
        </div>
    )
}

};



export default SignIn;