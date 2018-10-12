let path = require('path');
let express = require('express');
let fs = require('fs');
let server = express();
let files = [];
const PORT = process.env.PORT || 3000;

server.use(express.static('static'));

fs.readdirSync(__dirname + '/static/files/').forEach(file => {
    files.push(file);
});

server.get('/', function(request, response) {
    response.send(__dirname + '/static/index.html');
    response.end();
});

for (let i = 0; i < files.length; i++) {
    server.get('/static/files/' + files[i], function(request, response) {
        response.download(__dirname + '/static/files/' + files[i]);
    });
}

server.listen(PORT);