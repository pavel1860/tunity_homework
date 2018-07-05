
exports.tryWrapper = function(func) {
    return function(req, res, next) {
        try {
            func(req, res, next);
        } catch (error) {
            next(error);
        }
    };
};
