const express = require('express');
const bodyParser = require('body-parser');


const connectDB = require('./config/db');
var cors = require('cors');


// routes
const books = require('./routes/api/books');
const components = require('./routes/api/components');
const sellCarPosts = require('./routes/api/sellCarPosts');


const app = express();
const fs = require('fs');
const path = require('path')


//body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


// set static file middleware
app.use(express.static(__dirname + '/public'))

// Set EJS as template engine
app.set('view engine', 'ejs')

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true}));


// image upload test code 2021 06 10 
app.get('/', (req, res) => {
    return "Hello"
});


// use Routes
app.use('/api/books', books);
app.use('/api/components', components);
app.use('/api/sellCarPosts', sellCarPosts);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on the ${port}`))