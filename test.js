const supertest = require('supertest');
const accordion = require('./server/index.js');
const request = supertest(accordion)



describe('GET/Request', () => {
    test('Should get a response from a get request', async() => {
       const response = await request.get('/');
        expect(response.text).toBe('pass!');
    });
    
});
