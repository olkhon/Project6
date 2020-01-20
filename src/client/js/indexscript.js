/* Global Variables */

// add Listener for button with id generate

document.getElementById('generate').addEventListener('click', performAction);


// Function posts data from 

function performAction(e) {
    const newCity = document.getElementById('city').value;

    /* Function to POST data */
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

    // TODO-Call Function
    postData('/addCity', { city: newCity });

}







export { performAction }