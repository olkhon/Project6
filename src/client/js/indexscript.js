/* Imports */
import { updateGui } from './updateGui.js'
import { printData } from './printTravelData'
// add Listener for button with id generate

document.getElementById('generate').addEventListener('click', performAction);
document.getElementById('printButton').addEventListener('click', printData);


// Function posts data from 

function performAction(e) {


    // getting the input from field city and the user
    const newCity = document.getElementById('city').value;
    const newDateArrival = new Date(document.getElementById('arrival').value).getTime() / 1000;
    const newDateDeparture = new Date(document.getElementById('departure').value).getTime() / 1000;
    const newCurrentTime = new Date().getTime() / 1000;

    // 60*60*24 = 86400 in order to get days
    const newCountdown = ((newDateArrival - newCurrentTime) / 86400).toFixed(0);
    const newDuration = ((newDateDeparture - newDateArrival) / 86400).toFixed(0);
    console.log(newDuration);
    console.log(newCountdown);
    console.log(newCurrentTime);


    /* Function to POST data from clientside to server-side out of the box method */
    const postData = async(url = '/city', data = {}) => {
        console.log(data)
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header        
        });

        try {
            const newData = await response.json();
            // console.log(newData);
            return newData
        } catch (error) {
            console.log("error", error);
            // appropriately handle the error
        }
    }

    const resultsForm = {
        city: newCity,
        arrival: newDateArrival,
        departure: newDateDeparture,
        countdown: newCountdown,
        duration: newDuration
    }

    console.log(resultsForm)

    // calling postData function with parameters url and value of city
    //working version
    postData('http://localhost:5501/addCity', resultsForm)
        .then(data => {
            console.log('returned data', data);
            updateGui(data)
        })



}



export { performAction }