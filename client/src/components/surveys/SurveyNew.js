import React, { useState } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { useNavigate } from 'react-router-dom';

const SurveyNew = () => {
  const navigate = useNavigate();
  const [reviewMode, setReviewMode] = useState(false);

  return (
    <div>
      {!reviewMode ? (
        <SurveyForm onReview={() => setReviewMode(true)} />
      ) : (
        <SurveyFormReview
          onSubmit={() => {
            setReviewMode(false);
            navigate('/');
          }}
          onBack={() => setReviewMode(false)}
        />
      )}
    </div>
  );
};

export default SurveyNew;
