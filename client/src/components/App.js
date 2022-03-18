import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import { connect } from 'react-redux';
import * as actions from '../state/actions';

const Landing = () => <h2>Landing</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

const App = () => {
  return (
    <>
      <Header />
      <Route exact path='/' component={Landing} />
      <Route path='/surveys' component={SurveyNew} />
    </>
  );
};

export default connect()(App);
