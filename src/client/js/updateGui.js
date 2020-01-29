async function updateGui(data) {
    /*
        const fetch = require('node-fetch');
        const req = await fetch('http://localhost:5501/retrievedData')

        try {
            const retrievedData = await req.json();
            console.log(retrievedData);
            document.getElementById('imageContainer').innerHTML = `${retrievedData.temperature}`;

        } catch (error) {
            console.log('error', error)
        }
        */
    console.log(data);
    document.getElementById('imageContainer').innerHTML = `<img src="${data.imageUrl}" id="imgTagPixabay">`;

}


export { updateGui }