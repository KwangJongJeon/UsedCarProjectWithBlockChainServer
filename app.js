const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello World!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on the ${port}`))