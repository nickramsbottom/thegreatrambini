const express = require('express');
const wisdom = require('./wisdom');

const app = express();

app.get('/horoscope', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ wisdom: wisdom[Math.floor(Math.random() * wisdom.length)] }));
});

app.listen(3000, () => console.log('Example app is listening on port 3000!'));
