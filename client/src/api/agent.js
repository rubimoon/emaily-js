import axios from 'axios';

// sending request with proxy server

const responseBody = (response) => response.data;

const requests = {
  get: (url, params) => axios.get(url, { params }).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
};

const Account = {
  currentUser: () => requests.get('/api/current_user'),
  sendPaymentToken: (token) => requests.post('/api/stripe', token),
};

const Surveys = {
  submitSurvey: (values) => requests.post('/api/surveys', values),
};

const agent = {
  Account,
  Surveys,
};

export default agent;
