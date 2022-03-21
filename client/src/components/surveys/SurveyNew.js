import React, { useState } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { reduxForm } from 'redux-form';

const SurveyNew = () => {
  const [reviewMode, setReviewMode] = useState(false);

  return (
    <div>
      {!reviewMode ? (
        <SurveyForm onReview={() => setReviewMode(true)} />
      ) : (
        <SurveyFormReview onBack={() => setReviewMode(false)} />
      )}
    </div>
  );
};

export default reduxForm({ form: 'surveyForm' })(SurveyNew);
