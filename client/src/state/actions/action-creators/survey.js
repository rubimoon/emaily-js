import agent from '../../../api/agent';
import { FETCH_USER } from '../types';

const submitSurvey = (values) => async (dispatch) => {
  const survey = await agent.Surveys.submitSurvey(values);
  dispatch({ type: FETCH_USER, payload: survey });
};

export { submitSurvey };
