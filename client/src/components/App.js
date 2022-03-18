import React from 'react';
import Header from '../components/Header';

import Routes from './Routes';
import * as actions from '../state/actions';

const App = () => {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
};

export default connect()(App);
