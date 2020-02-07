async function updateGui(data) {
    let days;

    if (data.duration > 1) {
        days = 'days';

    } else {
        days = 'day';
    }

    if (data.countdown == 0) {
        document.getElementById('holderAnswerApi').style.borderradius = "5px";
        document.getElementById('holderAnswerApi').style.border = "1px solid grey";


        document.getElementById('picDiv').innerHTML = `<img src="${data.imageUrl}" id="imgTagPixabay">`;
        document.getElementById('textDiv').innerHTML = `<p>${data.summary}</p>
        <p>Temperature in ${data.city} will be ${data.temperature} Fahrenheit.</p>
        <p>Your trip to ${data.city} starts tomorrow.</p>
        <p>Your trip will last in total ${data.duration} ${days}.</p>`;
    } else {
        document.getElementById('holderAnswerApi').style.borderradius = "5px";
        document.getElementById('holderAnswerApi').style.border = "1px solid grey";

        document.getElementById('picDiv').innerHTML = `<img src="${data.imageUrl}" id="imgTagPixabay">`;
        document.getElementById('textDiv').innerHTML = `<p>${data.summary}</p>
        <p>Temperature in ${data.city} will be ${data.temperature} Fahrenheit.</p>
        <p>Your trip to ${data.city} starts in ${data.countdown} days.</p>
        <p>Your trip will last in total ${data.duration} ${days}.</p>`;
    }

    deleteJourney();
    printTravelData();
}


export { updateGui }