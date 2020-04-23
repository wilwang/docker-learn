'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.json(['cart1', 'cart2', 'cart3', 'cart4', 'cart5', 'cart6']);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);