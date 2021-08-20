import react from 'react';
import './custom-button.scss';


const  CustomButton= ({children,isGoogleSignIn,inverted, ...otherProps}) => (
  <button type="button" className={`${inverted ? 'inverted' : ''}  {isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;