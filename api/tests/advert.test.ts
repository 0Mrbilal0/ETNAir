import supertest from 'supertest';
import {app} from '../index';
describe('Advert API', () => {
    // fonctionne
    test('GET /rentals', async () => {
        const response = await supertest(app).get('/rentals');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
    });
    // Besoin des repos pour fonctionner
    test('POST /rentals', async () => {
        const response = await supertest(app)
            .post('/rentals')
            .send({title: 'kamurocho',
                   description: 'small appartment in the heart of tokyo',
                   price: 100,
                   location: 'tokyo',
                   type: 'appartment',
                   address: {city: 'tokyo', street: 'kamurocho', number: 1, zip_code: '100-0001'}});
        expect(response.status).toBe(201);
        expect(response.body).toEqual({title: 'kamurocho',
            description: 'small appartment in the heart of tokyo',
            price: 100,
            location: 'tokyo',
            type: 'appartment',
            address: {city: 'tokyo', street: 'kamurocho', number: 1, zip_code: '100-0001'}});
    });
    // Besoin des repos pour fonctionner
    test('GET /rentals/:id', async () => {
        const response = await supertest(app).get('/rentals/1');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({title: 'kamurocho',
            description: 'small appartment in the heart of tokyo',
            price: 100,
            location: 'tokyo',
            type: 'appartment',
            address: {city: 'tokyo', street: 'kamurocho', number: 1, zip_code: '100-0001'}});
    });
    test('PUT /rentals/:id', async () => {
        const response = await supertest(app)
            .put('/rentals/1')
            .send({title: 'kamurocho',
                description: 'small appartment in the heart of tokyo',
                price: 1000,
                location: 'tokyo',
                type: 'appartment',
                address: {city: 'tokyo', street: 'kamurocho', number: 1, zip_code: '100-0001'}});
        expect(response.status).toBe(200);
        expect(response.body).toEqual({title: 'kamurocho',
            description: 'small appartment in the heart of tokyo',
            price: 1000,
            location: 'tokyo',
            type: 'appartment',
            address: {city: 'tokyo', street: 'kamurocho', number: 1, zip_code: '100-0001'}});
    });
    test('DELETE /rentals/:id', async () => {
        const response = await supertest(app).delete('/rentals/1');
        expect(response.status).toBe(204);
    });
});