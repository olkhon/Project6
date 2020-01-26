/* Middleware*/

const bodyParser = require('body-parser');

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

const express = require('express');

// Start up an instance of app

const app = express();


//Configuring express to use body-parser as middle-ware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


// dotenv for hiding credentials in env file
const dotenv = require('dotenv');
dotenv.config();

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

// post route to User Input Client

var getCoordinates = require('./geonamesApi')
var getWeather = require('./darkskyApi')
var retrieveImage = require('./pixabayApi')

// POST City function server side

app.post('/addCity', function(req, res) {
    inputCity = req.body.city;
    inputDateArrival = req.body.arrival;
    inputDateDeparture = req.body.departure;


    getCoordinates(inputCity)

    .then(data => getWeather(data['lng'], data['lat'], inputDateArrival))
        .then(data => {

            console.log(data);
        })
        .then(data => retrieveImage(inputCity))
        .then(data => {

            console.log(data);

        })
    res.send({
        city: inputCity,
        arrival: inputDateArrival,
        departure: inputDateDeparture
    });

});