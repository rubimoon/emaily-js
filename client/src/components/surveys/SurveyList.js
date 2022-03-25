import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../state/actions';

const SurveyList = () => {
  const dispatch = useDispatch();
  const { surveys } = useSelector((state) => state.surveys);

  useEffect(() => {
    dispatch(actions.fetchSurveys());
  }, [dispatch]);

  return (
    <div>
      {surveys.reverse().map((survey) => (
        <div className='card blue-grey darken-1' key={survey._id}>
          <div className='card-content'>
            <span className='card-title'>{survey.title}</span>
            <p>{survey.body}</p>
            <p className='right'>
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className='card-action'>
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SurveyList;
