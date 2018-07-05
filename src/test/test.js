const request = require('supertest');
const app = require('../server/app');



describe('api unit tests', ()=>{

    test('test prev end point', async ()=>{
        const res1 = await request(app).patch('/prev');
        expect(res1.status).toBe(204);
        const res2 = await request(app).patch('/prev');
        expect(res2.status).toBe(200);
        expect(res2.body.data.ip).toBe('::ffff:127.0.0.1');
        console.log(res2)
    });

    test('test total', async ()=>{
        const res1 = await request(app).patch('/total')
        expect(res1.body.numOfAccess).toBe(2);
        const res2 = await request(app).patch('/total')
        expect(res2.body.numOfAccess).toBe(2);
        const res3 = await request(app).patch('/total')
        expect(res3.body.numOfAccess).toBe(2);
    })

    test('test stats', async ()=>{
        const res1 = await request(app).patch('/stats')
        expect(res1.body.totalRequests).toBe(6);
    })
})
