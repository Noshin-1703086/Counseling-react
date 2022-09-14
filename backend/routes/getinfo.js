const jwt = require("jsonwebtoken");
const router = require("express").Router();
const { User } = require("../models/user");
const dotenv = require('dotenv')
dotenv.config()

router.get("/",async(req,res) => {
    const token = req.query.token;
    if(token)
        {
            jwt.verify(token,process.env.JWTPRIVATEKEY,(err,decodedToken)=>{
            if(err){
                console.log(err.message);
                res.redirect('/Login');
            }else {
                console.log(decodedToken.user);
                res.send(decodedToken.user);
            }
        })
    }
    else
        {
        res.redirect('/Login');
        }
    });
module.exports = router;