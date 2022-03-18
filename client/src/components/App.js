import React from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import Routes from './Routes';
import * as actions from '../state/actions';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Routes />
    </div>
  );
};

export default connect()(App);
