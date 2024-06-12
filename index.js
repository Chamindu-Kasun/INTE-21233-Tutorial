const express = require('express')
const path = require("path")
const app = express()
const port = 3000
const { login } = require('./Controller/loginController');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'View',"Login")));
app.use(express.static(path.join(__dirname, 'View',"Welcome")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"View","Login","index.html"));
})

app.post('/login', login);

app.get('/welcome', (req, res) => {
  res.sendFile(path.join(__dirname, 'View', 'Welcome', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})