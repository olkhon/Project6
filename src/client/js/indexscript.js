/* Global Variables */

// add Listener for button with id generate

document.getElementById('generate').addEventListener('click', performAction);


// Function posts data from 

function performAction(e) {


    // getting the input from field city and the user
    const newCity = document.getElementById('city').value;
    const newDate = document.getElementById('inputDate').value;
    console.log(newDate);

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

    // calling postData function with parameters url and value of city
    //working version
    postData('/addCity', { city: newCity }).then(result => console.log(result));
}



export { performAction }