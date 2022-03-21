import React from 'react';

const SurveyField = ({ input, label, meta }) => {
  const { error, touched } = meta;

  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      <div className='red-text' style={{ marginbox: '25px' }}>
        {touched && error}
      </div>
    </div>
  );
};
export default SurveyField;
