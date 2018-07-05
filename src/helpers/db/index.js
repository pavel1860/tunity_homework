const config = require('config');

const MAX_IPS_TO_SAVE = config.get('maxIpsToSave');
/**
 * 
 */
class DB {
    /**
     * consotructor for the data base to initialize data structures
     */
    constructor() {
        this.urlAccessCounters = {};
        this.db = [];
        this.itemId = 0;
        this.lastIp = undefined;
    }

    /**
     * generate unique id for item. can be changed to diffrent id
     * @return {int} returns new id
     */
    generateItemId() {
        return this.itemId++;
    }

    /**
     * @param {*} ip
     * @return {int} id of the new item
     */
    addIp(ip, path) {
        const timestamp = Date.now();     
        this.db.unshift({
            ip,
            timestamp,
            path,
        });
    }

    getTotalEntries() {
        return this.db.length;
    }

    lastAccessTime() {
        if (this.db.length)
            return this.db[0].timestamp;
    }

    /**
     * 
     * @param {*} interval 
     */
    getAccessPerInterval(interval) {
        const minTimeStamp = Date.now() - interval;
        const r = this.db.filter(v => v.timestamp > minTimeStamp)
        return r.length;
    }

    /**
     * 
     * @param {*} path 
     */
    getTotalAccessForPath(path) {
        const res = this.db.filter(v => v.path===path);
        return res ? res.length : 0;
    }
    /**
     * 
     * @param {*} path 
     */
    getEntriesGroupedByIps(lastNumOfSecs) {
        const entriesGroupedByIps = this.db.reduce((acc, curr)=>{
            acc[curr.ip] = acc[curr.ip] || [];
            acc[curr.ip].push(curr);
            return acc;
        }, {});
        return entriesGroupedByIps;
    }

    /**
     * @return {string} returns the last ip
     */
    getLastIp(path, index) {
        const r = this.db.filter(v=>v.path == path);
        if (r.length > index) {
            return r[index];
        }
        return undefined;
    }

    clear() {
        this.db = [];
    }
}

const db = new DB();

module.exports = db;
