import { useEffect } from 'react';
import Header from './layout/Header';
import Routes from './Routes';
import * as actions from '../state/actions';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchUser());
  }, [dispatch]);

  return (
    <div className='container'>
      <Header />
      <Routes />
    </div>
  );
};

export default App;
