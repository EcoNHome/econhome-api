const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const port = 8080 | process.env.PORT;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs');

require('./routes/index')(app, ejs);

app.listen(port, () => console.log("Server running on localhost:%s", port));
