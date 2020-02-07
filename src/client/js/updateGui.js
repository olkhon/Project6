async function updateGui(data) {
    let countdown;
    let duration;

    if (data.duration > 1) {
        duration = 'days';

    } else {
        duration = 'day';
    }


    if (data.countdown == 0) {
        countdown = "today";
    } else if (data.countdown == 1) {
        countdown = "tomorrow";
    } else {
        countdown = "days";
    }

    if (data.countdown <= 1) {
        document.getElementById('holderAnswerApi').style.borderradius = "5px";
        document.getElementById('holderAnswerApi').style.border = "1px solid grey";


        document.getElementById('picDiv').innerHTML = `<img src="${data.imageUrl}" id="imgTagPixabay">`;
        document.getElementById('textDiv').innerHTML = `<p>${data.summary}</p>
        <p>Temperature in ${data.city} will be ${data.temperature} Fahrenheit.</p>
        <p>Your trip to ${data.city} starts ${countdown}.</p>
        <p>Your trip will last in total ${data.duration} ${duration}.</p>`;
    } else {
        document.getElementById('holderAnswerApi').style.borderradius = "5px";
        document.getElementById('holderAnswerApi').style.border = "1px solid grey";

        document.getElementById('picDiv').innerHTML = `<img src="${data.imageUrl}" id="imgTagPixabay">`;
        document.getElementById('textDiv').innerHTML = `<p>${data.summary}</p>
        <p>Temperature in ${data.city} will be ${data.temperature} Fahrenheit.</p>
        <p>Your trip to ${data.city} starts in ${data.countdown} ${countdown}.</p>
        <p>Your trip will last in total ${data.duration} ${duration}.</p>`;
    }
}


export { updateGui }