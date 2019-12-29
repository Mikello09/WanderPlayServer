
const express = require('express');
const app = express();

app.get('/users', (req, res) => {
        res.send('Users');
});

app.post('/lugares', (req, res) => {
  console.log(req.body)
  res.send('lugares')
});

app.post('/trofeos', (req, res) => {
  console.log(req.body)
  res.send('trofeos')
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
        console.log('Server listening...');
});

