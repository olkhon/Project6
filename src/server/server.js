// Require Express to run server and routes

const express = require('express');

// Start up an instance of app

const app = express();

/* Middleware*/

const bodyParser = require('body-parser');

//Configuring express to use body-parser as middle-ware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


// Cors for cross origin allowance

const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile('dist/index.html');
});

// Setup Server


const port = 5501;

const server = app.listen(port, listen);

function listen() {
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}