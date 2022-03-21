import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch } from 'react-redux';
import * as actions from '../../state/actions';

const Payments = () => {
  const dispatch = useDispatch();
  return (
    <StripeCheckout
      name='Emaily'
      description='$5 for 5 emails'
      amount={500}
      token={(token) => dispatch(actions.handlePayment(token))}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className='btn'>Add Credit</button>
    </StripeCheckout>
  );
};
export default Payments;
