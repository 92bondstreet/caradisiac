const express = require('express');
//const search = require('./bdd/search.js');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/elasticsearch', (req, res) => {
   
  res.send('api/elastic');
});

app.listen(port, () => console.log(`Listening on port ${port}`));