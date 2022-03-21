import React from 'react';
import { useSelector } from 'react-redux';
import { SURVEY_FIELDS } from '../../constants/form-fields';

const SurveyFormReview = ({ onBack, onSubmit }) => {
  const { surveyForm } = useSelector((state) => state.form);
  const { values } = surveyForm;

  return (
    <div>
      <h5>Please Confirm your Entries</h5>
      <div>
        {SURVEY_FIELDS.map((field) => {
          return (
            <div>
              <label>{field.label}</label>
              <div>{values[field.name]}</div>
            </div>
          );
        })}
      </div>
      <button className='yellow darken-3 btn-flat' onClick={onBack}>
        Back
      </button>
    </div>
  );
};

export default SurveyFormReview;
