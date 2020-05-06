const accordion = require('./index.js');
const port = 3004;
accordion.listen(port,() =>console.log(`Listening on port ${port}`))