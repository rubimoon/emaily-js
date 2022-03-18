import { Route, Routes as ReactRoutes } from 'react-router-dom';

const Landing = () => <h2>Landing</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

const Routes = () => {
  return (
    <ReactRoutes>
      <Route exact path='/' element={<Landing />} />
      <Route path='/surveys' element={<SurveyNew />} />
    </ReactRoutes>
  );
};

export default Routes;
