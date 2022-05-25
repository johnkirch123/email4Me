import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { handleToken } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';

const Payments = () => {
  const dispatch = useDispatch();

  return (
    <StripeCheckout
      name='Email4Me'
      description='4242 4242 4242 4242 - card number'
      amount={500}
      token={(token) => dispatch(handleToken(token))}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className='btn blue lighten-2'>Add Credits</button>
    </StripeCheckout>
  );
};

export default Payments;
