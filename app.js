const express = require('express');
const app = require('app');

const port = 3000;

app.use(express.static('public'));

// app.get('/*', (req, res) => {
//     return res.sendFile(__dirname + '/public/index.html');
// });

app.get('/assessment/*', (req, res) => {
    return res.sendFile(__dirname + '/public/assessment/index.html');
});

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
