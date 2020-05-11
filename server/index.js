const express = require('express');

const accordion = express();

const db = require('../data/db/accordion');

const port = 3004;


accordion.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

accordion.use(express.static('public'));
accordion.use(express.json());

accordion.get('/api/accordion/:id', (req, res) => {
  let id = req.params;

  if (id > 100 || id < 1) {
    id = 1;
  }
  db.findOne({ 'features.id': `${id.id}` }, (err, feature) => {
    if (err) console.log('errordatA');
    res.send(feature);
  });
});

accordion.listen(port,() => console.log(`Listening on port ${port}`));

module.exports = accordion;
