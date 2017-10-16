var express  = require('express');
var router = express.Router();

router.get("/speakers", function(req,res){
    var info= '';
    var dataFile = req.app.get('appData');
    dataFile.speakers.forEach(function(item) {
        info += `
        <l1>
            <h2>${item.name}</h2>
            <p>${item.summary}</p>
            <script scr="/reload/reload.js"></script>
     `;
    } );
    res.send(`
    <h1>Start zaczynamy działać dfgdfgd </h1>
    ${info};
    `);

});
router.get("/speakers/:speakersid", function(req,res){
    var dataFile = req.app.get('appData');
    var speaker = dataFile.speakers[req.params.speakersid];
    res.send(`
    <h1>${speaker.title}</h1>
    <p> ${speaker.shortname}</p>
    <script scr="/reload/reload.js"></script>
    `);

});
module.exports= router;