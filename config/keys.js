// separate prod and dev environement
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
  console.log('This is production env');
} else {
  module.exports = require('./dev');
  console.log('DEV:' + process.env.NODE_ENV);
}
