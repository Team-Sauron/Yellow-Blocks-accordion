const supertest = require('supertest');
const accordion = require('./server/index.js');
const request = supertest(accordion)


accordion.get('api/accordion/', async (req, res) => {
    res.json({message: 'pass!'})
});

describe('GET/Request', () => {
    test('Should get a response from a get request', async done => {
        const res = await request.get('/api/accordion/')
        
        expect(response.body.message).toBe('pass!');
        done();
    });
    
});