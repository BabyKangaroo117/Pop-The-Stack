const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', (req, res) => {
  res.send('Hello World login!');
});

app.get('/logout', (req, res) => {
  res.send('Hello World logout');
});

app.get('/statistics', (req, res) => {
  res.send('Hello World statisitcs!');
});

app.get('/signup', (req, res) => {
  res.send('Hello World signup!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});