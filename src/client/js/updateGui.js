async function updateGui(data) {
    let days;

    if (data.duration > 1) {
        days = 'days';

    } else {
        days = 'day';
    }

    console.log(data);

    if (data.countdown == 0) {
        const deleteButton = document.createElement("BUTTON");
        deleteButton.setAttribute("id", "deleteButton");
        deleteButton.innerHTML = "Delete current travel data";
        document.getElementById("removeButton").appendChild(deleteButton);
        document.getElementById('picDiv').innerHTML = `<img src="${data.imageUrl}" id="imgTagPixabay">`;
        document.getElementById('textDiv').innerHTML = `<p>${data.summary}</p>
        <p>Temperature in ${data.city} will be ${data.temperature} Celcius.</p>
        <p>Your trip to ${data.city} starts tomorrow.</p>
        <p>Your trip will last in total ${data.duration} ${days}.</p>`;
    } else {
        const deleteButton = document.createElement("BUTTON");
        deleteButton.setAttribute("id", "deleteButton");
        deleteButton.innerHTML = "Delete current travel data";
        document.getElementById("removeButton").appendChild(deleteButton);
        document.getElementById('picDiv').innerHTML = `<img src="${data.imageUrl}" id="imgTagPixabay">`;
        document.getElementById('textDiv').innerHTML = `<p>${data.summary}</p>
        <p>Temperature in ${data.city} will be ${data.temperature} Celcius.</p>
        <p>Your trip to ${data.city} starts in ${data.countdown} days.</p>
        <p>Your trip will last in total ${data.duration} ${days}.</p>  
                                                            `;
    }



}

export { updateGui }