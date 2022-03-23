const express = require('express');
const bodyParser = require('body-parser');
const { connectDb } = require('./services/database');
const PORT = process.env.PORT || 5050;

// Services
require('./services/auth');
// Models
require('./models/User');
require('./models/Survey');

const app = express();
connectDb();
app.use(bodyParser.json());

// Middlewares
require('./middlewares/auth')(app);
require('./routes/authRoutes')(app);
require('./routes/paymentRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
