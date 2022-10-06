const express = require('express');
const Error = require('./error');
const Response = require('./response');
const Validation = require('./validation');
const router = express.Router();
router.get('/users', async (req, res) => {
    try {
        let list = await User.find({});
        res.status(200).send(new Response('User records found', list))
    } catch (e) {
        res.status(200).send(new Error('User records not found', e))
    }
});
router.post('/users', new Validation().payload, async (req, res) => {
    try {
        let user = new User(req.body);
        await user.save();
        res.status(200).send(new Response('User record created', user))
    } catch (e) {
        res.status(200).send(new Error('User record not created', e))
    }
});
router.put('/users/:_id', new Validation().payload, async (req, res) => {
    if (req.params._id) {
        try {
            let user = await User.findByIdAndUpdate(req.params._id, req.body);
            res.status(200).send(new Response('User record updated', user))
        } catch (e) {
            res.status(200).send(new Error('User record not updated', e))
        }
    } else {
        res.status(200).send(new Error('User id required in api url params', {}))
    }
});
router.delete('/users/:_id', async (req, res) => {
    if (req.params._id) {
        try {
            let user = await User.deleteOne({ _id: req.params._id });
            res.status(200).send(new Response('User record deleted', user))
        } catch (e) {
            res.status(200).send(new Error('User record not deleted', e))
        }
    } else {
        res.status(200).send(new Error('User id required in api url params', {}))
    }
});
module.exports = router;