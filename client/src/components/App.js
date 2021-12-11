import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Landing = () => <h2>Landing</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Landing} />
        <Route  path='/surveys' component={SurveyNew} />

      </div>
    </BrowserRouter>
  );
};

export default App;
