'use strict';

const express = require('express');

// Constants
const PORT = 3002;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.json(['user1', 'user2', 'user3']);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);