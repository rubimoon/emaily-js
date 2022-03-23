import { FETCH_SURVEYS } from '../actions/types';

const INITIAL_STATE = {
  surveys: [],
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_SURVEYS:
      return { ...state, surveys: payload };
    default:
      return state;
  }
};

export { reducer as surveysReducer };
