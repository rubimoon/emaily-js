import React from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

const SurveyForm = ({ handleSubmit }) => {
  const FIELDS = [
    { label: 'Survey Title', name: 'title' },
    { label: 'Subjet Line', name: 'subject' },
    { label: 'Email Body', name: 'body' },
    { label: 'Recipient List', name: 'emails' },
  ];

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
      <form onSubmit={handleSubmit((formProps) => console.log(formProps))}>
        {renderedFields}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default reduxForm({ form: 'surveyForm' })(SurveyForm);
