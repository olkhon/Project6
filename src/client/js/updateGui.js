async function updateGui(data) {

    let days;

    if (data.duration > 1) {
        days = 'days';

    } else {
        days = 'day';
    }

    console.log(data);

    if (data.countdown == 0) {
        document.getElementById('picDiv').innerHTML = `<img src="${data.imageUrl}" id="imgTagPixabay">`;
        document.getElementById('textDiv').innerHTML = `<p>Temperature in ${data.city} will be ${data.temperature} Celcius.</p>
                                                            <p>Your trip to ${data.city} starts tomorrow.</p>
                                                            <p>Your trip will last in total ${data.duration} ${days}.</p>  
                                                            `;
    } else {
        document.getElementById('picDiv').innerHTML = `<img src="${data.imageUrl}" id="imgTagPixabay">`;
        document.getElementById('textDiv').innerHTML = `<p>Temperature in ${data.city} will be ${data.temperature} Celcius.</p>
                                                            <p>Your trip to ${data.city} starts in ${data.countdown} days.</p>
                                                            <p>Your trip will last in total ${data.duration} ${days}.</p>  
                                                            `;
    }



}

export { updateGui }