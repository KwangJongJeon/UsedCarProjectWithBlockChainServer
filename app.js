const express = require('express');
const bodyParser = require('body-parser');

const connectDB = require('./config/db');
var cors = require('cors');

// routes
const books = require('./routes/api/books');

const app = express();

//body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true}));

app.get('/', (req, res) => res.send('Hello World!'));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on the ${port}`))