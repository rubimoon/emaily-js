import agent from '../../../api/agent';
import { FETCH_USER } from '../types';

const fetchUser = () => async (dispatch) => {
  const currentUser = await agent.Account.currentUser();
  dispatch({ type: FETCH_USER, payload: currentUser });
};

export { fetchUser };
