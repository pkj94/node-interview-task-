module.exports = class Error {
    constructor(message, error) {
        this.message = message;
        this.time = new Date().toJSON();
        this.error = error;
    }
}