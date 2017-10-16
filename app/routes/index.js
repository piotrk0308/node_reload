var express = require('express');
var router = express.Router();


router.get("/", function (req,res){
    res.send(`
        <h1>Welcome to my website ciekawe </h1>
        <p>TO jest fajne </p>
        <script scr="/reload/reload.js"></script>
     `);
});
module.exports= router;