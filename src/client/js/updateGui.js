async function updateGui(data) {

    console.log(data);
    document.getElementById('picDiv').innerHTML = `<img src="${data.imageUrl}" id="imgTagPixabay">`;
    document.getElementById('textDiv').innerHTML = `<p>Temperature in ${data.city} will be ${data.temperature} Celcius</p>`
}

export { updateGui }