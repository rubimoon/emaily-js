import React, { useState } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

const SurveyNew = () => {
  const [editMode, setEditMode] = useState(true);

  console.log(editMode);
  const handleSubmit = () => {
    setEditMode(false);
  };

  return (
    <div>
      {editMode ? <SurveyForm onSubmit={handleSubmit} /> : <SurveyFormReview />}
    </div>
  );
};

export default SurveyNew;
