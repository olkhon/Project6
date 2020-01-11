// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear();

/* Global Variables */

let newDay = document.getElementById('date');
let newTemp = document.getElementById('temp');
let newContent = document.getElementById('content');

newDay.textContent = newDate;


let baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";


let apiKey = "12ee0ca97cb978e30433467567425292";




// add Listener for button with id generate

document.getElementById('generate').addEventListener('click', performAction);


// callBack Function

function performAction(e) {

    let newZip = document.getElementById('zip').value;

    if (!newZip) {
        newZip = 12059;
    }

    getZip(baseURL, newZip, apiKey)
        .then(result => {
            console.log(result);
            let newFeeling = document.getElementById('feelings').value;
            // calling post function
            postData("http://localhost:5501/addData", {
                temp: result.main.temp,
                date: newDate,
                resp: newFeeling
            });
        })
        .then(data => {
            updateUI();
        })
}

// Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.

let getZip = async(baseURL, zip, key) => {

    let getZip = await fetch(baseURL + `${zip},de&units=metric&APPID=` + key)

    try {
        let data = await getZip.json();

        return data;

        console.log(data);
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
};


// Post data function

const postData = async(url = "", data = {}) => {

    console.log(data);

    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });


    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};


/* Function that retrieves data from server to update UI elements */
const updateUI = async() => {
    const request = await fetch("http://localhost:5501/all");
    try {
        const allData = await request.json();
        console.log(allData);
        document.getElementById("temp").innerHTML =
            "Temperature: " + allData.temp + " °C";
        document.getElementById("date").innerHTML = "Date: " + allData.date;
        document.getElementById("content").innerHTML = "Content: " + allData.resp;
    } catch (error) {
        console.log("error", error);
    }
};