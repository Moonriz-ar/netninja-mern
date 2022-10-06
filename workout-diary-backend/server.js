require('dotenv').config();

const express = require('express');
const port = process.env.PORT;

// instanciate express app
const app = express();

// routes
app.get('/', (req, res) => {
  res.json({ mssg: 'Welcome to the app' });
});

// listen for requests
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
