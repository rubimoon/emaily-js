import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Dashboard from './surveys/Dashboard';
import Landing from './Landing';
import SurveyNew from './surveys/SurveyNew';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route exact path='/' element={<Landing />} />
      <Route path='/surveys' element={<Dashboard />} />
      <Route path='/surveys/new' element={<SurveyNew />} />
    </ReactRoutes>
  );
};

export default Routes;
