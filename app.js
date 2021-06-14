const express = require('express');
const bodyParser = require('body-parser');


const connectDB = require('./config/db');
var cors = require('cors');


// routes
const sellCarPosts = require('./routes/api/sellCarPosts');
const user = require('./routes/api/user')
const parts = require('./routes/api/parts');


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
app.use('/api/sellCarPosts', sellCarPosts);
app.use('/api/users', user)
app.use('/api/parts', parts)

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on the ${port}`))