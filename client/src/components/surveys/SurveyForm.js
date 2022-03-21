import React from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import { validateEmails } from '../../utils/validateEmails';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subjet Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' },
];

const SurveyForm = ({ handleSubmit, onSubmit }) => {
  console.log(onSubmit);
  const renderedFields = FIELDS.map((field) => (
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
      <form onSubmit={handleSubmit(onSubmit)}>
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

  FIELDS.forEach((field) => {
    if (!values[field.name]) {
      errors[field.name] = `You must provide a ${field.name}`;
    }
  });

  return errors;
};

export default reduxForm({
  form: 'surveyForm',
  validate,
})(SurveyForm);
