import 'materialize-css/dist/css/materialize.min.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import Root from './Root';

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Root>,
  document.querySelector('#root')
);

console.log('STRIPE KEY is ', process.env.REACT_APP_STRIPE_KEY);
console.log('Environment is ', process.env.NODE_ENV);
