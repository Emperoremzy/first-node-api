
var express = require('express');

var app = express();

app.get('/', function(request, response){
    response.send('My first Api!!');
});

app.get('/funions', function(req,res){
    res.send('yo give me some funions foo.')
});

app.listen(3000, function(){
    console.log("first api running on port 3000!");
});

