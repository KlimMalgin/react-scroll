/**
 * Created by bas on 19.11.2014.
 */
'use strict';

var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('./build'));

var sendFile = function(req, res){
    res.sendFile('/index.html', { root : path.join(__dirname, path.join('.', 'build'))});
};

app.get(/(.*)/, sendFile);

app.listen(7878);