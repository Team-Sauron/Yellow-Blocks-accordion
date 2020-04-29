const express = require('express')
const accordion = express()
const port = 3004;
//const db = require('./db');

accordion.use(express.static('public'))

accordion.get('/',function (req,res) {
    res.send('server up!')
})

accordion.listen(port,() =>console.log(`Listening on port ${port}`));
