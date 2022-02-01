'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send('AWS is active.');
});

app.get('/test', (req, res) => {
    res.status(200).send('Test route working.');
})

app.listen(PORT, () => {
  console.log('Server is running on ' + process.env.PORT);
});