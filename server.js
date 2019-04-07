const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const userData = require('./user-data.json');

app.listen(port, () => console.log(`Listening on port ${port}`));

console.log(userData);

app.get('/get_data', (req, res) => {
  res.send(userData);
});
