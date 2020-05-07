const express = require('express');

const accordion = express();
const path = require('path');

const db = require('../data/db/accordion');

const port = 3004;
accordion.use(express.static('public'));
accordion.use(express.json());

// for testing purposes
/*accordion.get('/', async (req, res) => {
  res.send('pass!');
});*/
//

accordion.get('/api/accordion/:id', (req, res) => {
 const id = req.params;
   
 db.findOne({ 'features.id': `${id.id}` }, (err, feature) => {
  //db.findOne({ 'features.id': '2' }, (err, feature) => {
    if (err) console.log('errordatA');
    res.send(feature);
  });
});

accordion.listen(port,() =>console.log(`Listening on port ${port}`));

module.exports = accordion;
