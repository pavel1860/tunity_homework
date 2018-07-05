const db = require('./index');

const IP1 = '123.123.123.123';
const IP2 = '123.123.123.124';
const IP3 = '123.123.123.125';

const PATH = '/test';
const PATH2 = '/test2';

describe('test db functionality', ()=>{

    beforeEach(()=>{
        db.clear();
    });

    test('adding and retrieving ip', ()=>{
        const lastIp = db.addIp(IP1, PATH);
        const lastIpRecord = db.getLastIp(PATH);
        expect(lastIpRecord.ip).toEqual(IP1);
        const lastIp2 = db.addIp(IP2, PATH);
        const lastIpRecord2 = db.getLastIp(PATH);
        expect(lastIpRecord2.ip).toEqual(IP2);
        const lastIp3 = db.addIp(IP3, PATH2);
        const lastIpRecord3 = db.getLastIp(PATH);
        expect(lastIpRecord3.ip).toEqual(IP2);  
    });
    
    test('getting total values', ()=>{
        let res1 = db.getTotalAccessForPath(PATH);
        expect(res1).toBe(0);
        db.addIp(IP1, PATH);
        let res2 = db.getTotalAccessForPath(PATH);
        expect(res2).toBe(1);
    });
});

