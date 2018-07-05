
/**
 * Adds two numbers together.
 * @param {int} num1 The first number.
 * @param {int} num2 The second number.
 */
class AppError extends Error {

    constructor(name, httpCode, error) {
        super(error);
        this.name = name
        this.httpCode = httpCode;
    }

}

module.exports = AppError;
