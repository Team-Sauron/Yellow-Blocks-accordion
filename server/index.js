const express = require('express');

const accordion = express();
const path = require('path');

const db = require('../data/db/accordion');

//const port = 3004;
accordion.use(express.static(path.join(__dirname, '../public')));
accordion.use(express.json());

accordion.get('/api/accordion/:id',function (req,res) {
   var id = req.params;
    
    db.findOne({ 'features.id' : `${id.id}` }, function (err, feature) {
    if(err) console.log('errordatA');
    console.log('%s is the id', feature)
    res.send(feature)
   })
})

//accordion.listen(port,() =>console.log(`Listening on port ${port}`));

module.exports = accordion;