const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('../config')
var user = require('../../models/user')
var express = require('express')
var router = express.Router()
const verifyToken = require('./verifyToken')
router.get('/getDetails',verifyToken,function(req,res,next){
    user.findById(req.userId,{password:0},function(err,user){
        if(err) return res.status(500).send('There was problem in loading user ')
        if(!user) return res.status(404).send('no user found');

        res.status(200).send(user);
    });
});
module.exports = router;