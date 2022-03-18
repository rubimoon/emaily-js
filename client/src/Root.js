import { Provider } from 'react-redux';
import { createAppStore } from './state/store';

const Root = ({ children }) => {
  return <Provider store={createAppStore()}>{children}</Provider>;
};

export default Root;
