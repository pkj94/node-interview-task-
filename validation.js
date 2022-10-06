const Error = require("./error");

module.exports = class Validation {
    payload(req, res, next) {
        let error = '';
        if (!req.body.firstName) {
            error = 'First name is reuired';
        } else if (!req.body.lastName) {
            error = 'Last name is reuired';
        } else if (!req.body.email) {
            error = 'Email is reuired';
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)) {
            error = 'Invalid email';
        } else if (!req.body.contactNo) {
            error = 'Contact no. is reuired';
        } else if (req.body.contactNo.length != 10) {
            error = 'Invalid Contact no.';
        }
        res.status(400).send(new Error(error, {}))
    }
}