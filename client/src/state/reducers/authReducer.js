import { FETCH_USER } from '../actions/types';

const INITIAL_STATE = {
  currentUser: '',
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_USER:
      return { ...state, currentUser: payload || false };
    default:
      return state;
  }
};

export { reducer as authReducer };
