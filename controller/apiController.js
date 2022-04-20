const router = require("express").Router();
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose')
const User = require('../models/users')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
const crypto = require('crypto')
const dotenv = require("dotenv");
const { json } = require("body-parser");
const { response } = require("express");
const { request } = require("http");
dotenv.config({ path: "./config/.env" });

var requestaa = require("request"); //requiring request module

const key = "password";
const algo = process.env.ALGO;
jwtkey = process.env.JWT_KEY;



// Register User
router.post('/register', jsonParser, (req, res) => {

    const cipher = crypto.createCipher(algo, key);
    const encrypted = cipher.update(req.body.password, 'utf8', 'hex') +
        cipher.final('hex');
    const data = new User({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        addres: req.body.address,
        password: encrypted,
        phone: req.body.phone
    })
    data.save().then((result) => {
        jwt.sign({ result }, jwtkey, { expiresIn: '1d' }, (err, token) => {
            if (err) {
                res.status(201).json({
                    message: "User Not Register",
                })
            } else {
                res.status(201).json({
                    message: "User Register Successfully",
                    jwttoken: token,
                });
            }
        })
    }).catch((err) => console.log(err))
})


// User Login
router.post('/login', jsonParser, (req, res) => {
    User.findOne({ email: req.body.email }).then((data) => {
        const decipher = crypto.createDecipher(algo, key);
        const decryptedPassword = decipher.update(data.password, 'hex', 'utf8') +
            decipher.final('utf8');
        if (decryptedPassword == req.body.password) {
            jwt.sign({ data }, jwtkey, { expiresIn: '1d' }, (err, token) => {
                res.status(200).json({
                    message: "User Login Successfully",
                    jwttoken: token,
                });
            })
        }
    })
})


// Gat All Users
router.get('/users', verifytoken, (req, res) => {
    User.find().then((result) => {
        res.status(200).json({
            message: "All User Details",
            data: result,
        })
    })
})

// Veryfy JWT Token
function verifytoken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        // console.log(bearer);
        req.token = bearer[1];
        jwt.verify(req.token, jwtkey, (err, authdata) => {
                if (err) {
                    res.json({
                        "result": "Token Not provide"
                    })
                } else {
                    next();
                }
            })
            // res.send("working")
    } else {
        res.send({
            "result": "token not found",

        })
    }
}

// Send OTP
router.post('/send', jsonParser, (req, res) => {

    const mobile = req.body.phone;
    const otp1 = Math.floor(Math.random() * (9999 - 1000)) + 1000;
    const sms_text = `Welcome to Bano India. We are there to grow your business. OTP is ${otp1}`;
    console.log(sms_text);

    requestaa(`http://sms.mahalaxminet.com/V2/http-api.php?apikey=V83YoqT7HRhF5GAl&senderid=Banoin&number=${mobile}&message=${sms_text}&format=json`, function(error, response, body) {
        if (response.statusCode == 200) {
            // writing the response to a file named data.html
            res.json({
                "message": response,
            })
        }
    });

});

module.exports = router