import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Dashboard from './surveys/Dashboard';
import Landing from './Landing';
import SurveyForm from './surveys/SurveyForm';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route exact path='/' element={<Landing />} />
      <Route path='/surveys' element={<Dashboard />} />
      <Route path='/surveys/new' element={<SurveyForm />} />
    </ReactRoutes>
  );
};

export default Routes;
