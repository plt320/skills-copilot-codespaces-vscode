//Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var express = require('express');
var app = express();

var comments = [];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/comments', function(req, res) {
    var allComments = '';
    for (var i = 0; i < comments.length; i++) {
        allComments += comments[i] + '<br>';
    }
    res.send(allComments);
});

app.get('/comment', function(req, res) {
    comments.push(req.query.comment);
    res.send('Comment added.');
});

app.listen(3000, function() {
    console.log('Server running at http://