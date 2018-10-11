let path = require('path');
let express = require('express');

const PORT = process.env.PORT || 3000;


express().use(express.static(
    path.join(__dirname, 'static')

)).listen(PORT);

console.log(PORT);