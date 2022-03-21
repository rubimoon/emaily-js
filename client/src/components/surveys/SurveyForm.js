import React from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import { validateEmails } from '../../utils/validateEmails';
import { SURVEY_FIELDS } from '../../constants/form-fields';

const SurveyForm = ({ handleSubmit, onReview }) => {
  const renderedFields = SURVEY_FIELDS.map((field) => (
    <Field
      key={field.name}
      name={field.name}
      label={field.label}
      component={SurveyField}
      type='text'
    />
  ));

  return (
    <div>
      <form onSubmit={handleSubmit(onReview)}>
        {renderedFields}
        <Link to='/surveys' className='red btn-flat white-text'>
          Cancel
        </Link>
        <button className='teal btn-flat right white-text' type='submit'>
          Next
        </button>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  errors.emails = validateEmails(values.emails || '');

  SURVEY_FIELDS.forEach((field) => {
    if (!values[field.name]) {
      errors[field.name] = `You must provide a ${field.name}`;
    }
  });

  return errors;
};

export default reduxForm({
  form: 'surveyForm',
  validate,
  destroyOnUnmount: false,
})(SurveyForm);
