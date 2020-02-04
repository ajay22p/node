var jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')
var config = require('../config')
const user = require('../../models/user')
const express = require('express')
const router = express.Router();
router.post('/login',(err,user) => {
    user.findone({email:req.body.email},(err,user)=>{
        if (err) return res.status(500).send('there was error connecting the server')
        if (!user) return res.status(404).send('user not found');
    var passwordIsValid = bcrypt.compareSync(req.body.password,user.password)
    if(!passwordIsValid) return res.status(401).send({auth:false,token:null})
    var token = jwt.sign({id:user._id},config.secret,{
        expiresIn:86400
    })
    res.status(200).send({auth:true,token:token});
    })
})
module.exports = router;