module.exports = class Response{
    constructor(message, data=''){
        this.message = message;
        this.time = new Date().toJSON();
        if(data)
        this.data = data;
    }
}