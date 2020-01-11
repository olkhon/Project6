// Setup empty JS object to act as endpoint for all routes
projectData = {};

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
app.use(express.static('website'));


// Setup Server


const port = 5501;

const server = app.listen(port, listen);

function listen() {
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}


// get Route to return project data object

app.get('/all', (request, response) => {
    response.send(projectData);
});


// post route to add data received from API

app.post('/addData', (request, response) => {
    console.log(request.body);

    const d = request.body;

    projectData['temp'] = d.temp;
    projectData['date'] = d.date;
    projectData['resp'] = d.resp;

    console.log('projectData: ', projectData);

});