const helpers = require('./helpers');
const db = require('../../helpers/db');
/**
 * returns the previus user ip that accessed the endpoint
 * @param {*} req 
 * @param {*} res 
 */
function prevIpController(req, res, next) {
    try {
        const lastIp = db.getLastIp('/prev', 1);
        if (!lastIp) {
            return res.status(204).send('no last ip was found');
        }
        return res.status(200).json({'data': lastIp});
    } catch (error) {
        next(error);
    };
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
function totalIpController(req, res) {
    try {
        const numOfAccess = db.getTotalAccessForPath('/prev');
        return res.status(200).json({'numOfAccess': numOfAccess});
    } catch (error) {
        next(error);
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
function statsController(req, res) {
    try {
        const totalRequests = db.getTotalEntries();
        const entriesGroupedByIds = db.getEntriesGroupedByIps();
        const totalDestinctIps = Object.keys(entriesGroupedByIds).length;
        const lastAccessTime = db.lastAccessTime();
        const accessPerHour = db.getAccessPerInterval(3600000);
        const accessPerMinute = db.getAccessPerInterval(60000);
        const statsRes = {
            totalRequests,
            totalDestinctIps,
            lastAccessTime,
            accessPerHour,
            accessPerMinute,
        };
        return res.status(200).json(statsRes);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    prevIpController,
    totalIpController,
    statsController,
};

