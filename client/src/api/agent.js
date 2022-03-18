import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5001';

const responseBody = (response) => response.data;

const requests = {
  get: (url, params) => axios.get(url, { params }).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
};

const Account = {
  currentUser: () => requests.get('/api/current_user'),
};

const agent = {
  Account,
};

export default agent;
