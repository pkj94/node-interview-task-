const { default: mongoose } = require("mongoose");

module.exports = mongoose.Schema({
    firstName: {
        type: String,
        default: '',
    },
    lastName: {
        type: String,
        default: '',
    },
    email: {
        type: String,
        default: '',
    },
    contactNo: {
        type: String,
        default: '',
    }
})