const accordion = require('./server.js');
const port = 3004;
accordion.listen(port,() =>console.log(`Listening on port ${port}`))