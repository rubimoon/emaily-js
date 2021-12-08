const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// in production, the PORT will be provided by heroku
const PORT = process.env.PORT || 5050;

// express telling node to listen to the port.
app.listen(PORT);
