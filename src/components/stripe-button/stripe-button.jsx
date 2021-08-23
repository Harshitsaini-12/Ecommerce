import { description } from 'commander';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton =({price}) => {
  const priceForStripe = price* 100;
  const publishableKey = 'pk_test_51JRXZISGQOPnY4DMY0nCABqOjKZ0kCJXkaiNYXuKfEsMyODwdb0tq0lF9ppm0ErZOSuDfeZgeTKnuGLoFDohZCXk00UTHL29Ju';

const onToken = token =>{
    console.log(token);
    alert('Payment Successful! 💰')
}


return (
  <StripeCheckout
   label='Pay Now'
   name='CROWN CLOTHING 🛍'
   billingAddress
   shippingAddress
   image='https://svgshare.com/i/CUz.svg'
   description={`Your total is $${price}`}
   amount={priceForStripe}
   panelLabel='Pay Now'
   token={onToken}
   stripeKey={publishableKey}
  />
  );
};


export default StripeCheckoutButton;

