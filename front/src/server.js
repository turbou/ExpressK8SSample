'use strict';

const express = require('express');
// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
// App
const app = express();
let http = require('http');
const URL = 'http://127.0.0.1:3001/';
//const URL = 'http://express-back:3001/';
app.get('/', (req, res) => {
  // res.send('Hello Contrast from Front');
  http.get(URL, function(res2) {
    console.log('Status: ' + res2.statusCode);
    console.log('Headers: ' + JSON.stringify(res2.headers));
    res2.setEncoding('utf8');
    var body = '';
    res2.on('data', function(chunk) {
      body += chunk;
    });
    res2.on('end', function() {
      console.log(body);
      res.send(body);
    });
  });
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

