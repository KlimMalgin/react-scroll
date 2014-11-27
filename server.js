/**
 * Created by bas on 19.11.2014.
 */
'use strict';

var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('./example'));

var sendFile = function(req, res){
    res.sendFile('/index.html', { root : path.join(__dirname, path.join('.', 'example'))});
};

app.get(/(.*)/, sendFile);

app.listen(7878);