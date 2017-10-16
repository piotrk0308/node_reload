var express = require('express');
var app= express();
var reload = require('reload');
var dataFile = require('./data/data.json');
app.set('appData',dataFile);
app.set('port',process.env.PORT || 3000);
app.use(require('./routes/index.js'));
app.use(require('./routes/speakers.js'));
reload(app);
var server= app.listen(app.get('port'),function(){
    console.log('Nasłuchuje na porcie'+app.get('port'));
});
