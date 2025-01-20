
const express = require('express');
const app = express();

function getPromise() {
  return new Promise((resolve, reject) => {
    resolve({ message: 'Server says Hello!' });
  });
}

app.get('/', (req, res) => {
  getPromise()
    .then(response => res.status(200).send(response))
    .catch(error => res.status(500).send(error));
});

app.listen(3000, () => {
  console.log('server Running on port 3000');
});
