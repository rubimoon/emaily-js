import agent from '../../../api/agent';
import { FETCH_USER } from '../types';

const fetchUser = () => async (dispatch) => {
  const currentUser = await agent.Account.currentUser();
  dispatch({ type: FETCH_USER, payload: currentUser });
};

const handlePayment = (token) => async (dispatch) => {
  const user = await agent.Account.sendPaymentToken(token);
  dispatch({ type: FETCH_USER, payload: user });
};
export { fetchUser, handlePayment };
