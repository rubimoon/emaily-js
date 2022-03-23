import agent from '../../../api/agent';
import { FETCH_USER, FETCH_SURVEYS } from '../types';

const submitSurvey = (values) => async (dispatch) => {
  const survey = await agent.Surveys.submitSurvey(values);
  dispatch({ type: FETCH_USER, payload: survey });
};

const fetchSurveys = () => async (dispatch) => {
  const surveys = await agent.Surveys.fetchSurveys();
  dispatch({ type: FETCH_SURVEYS, payload: surveys });
};

export { submitSurvey, fetchSurveys };
