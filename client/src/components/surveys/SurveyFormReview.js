import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SURVEY_FIELDS } from '../../constants/form-fields';
import { useNavigate } from 'react-router-dom';
import * as actions from '../../state/actions';

const SurveyFormReview = ({ onBack }) => {
  const { surveyForm } = useSelector((state) => state.form);
  const { values } = surveyForm;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(actions.submitSurvey(values));
    navigate('/');
  };

  return (
    <div>
      <h5>Please Confirm your Entries</h5>
      <div>
        {SURVEY_FIELDS.map((field) => {
          return (
            <div key={field.name}>
              <label>{field.label}</label>
              <div>{values[field.name]}</div>
            </div>
          );
        })}
      </div>
      <button className='yellow darken-3 btn-flat white-text' onClick={onBack}>
        Back
      </button>
      <button
        className='green btn-flat right white-text'
        onClick={handleSubmit}
      >
        Send Survey
      </button>
    </div>
  );
};

export default SurveyFormReview;
