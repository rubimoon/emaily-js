const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./services/passport');
require('./routes/authRoutes')(app);
require('./models/User');

// in production, the PORT will be provided by heroku
const PORT = process.env.PORT || 5050;
const CONNECTION_STRING = keys.mongoURL;

// express telling node to listen to the port.
mongoose.connect(CONNECTION_STRING);
app.listen(PORT);
