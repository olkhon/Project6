async function retrievePic(inputCity) {


    console.log(inputCity);


    const baseurlPixaby = 'https://pixabay.com/api/?key=';
    const dotenv = require('dotenv');
    dotenv.config();
    const apiKey = process.env.pixaby;
    const fetch = require('node-fetch');
    const res = await fetch(`${baseurlPixaby}${apiKey}&q=${inputCity}`);


    try {
        const data = await res.json();
        const image = data.hits[0].largeImageURL;
        return image;

    } catch (error) {
        console.log('error', error);
    }

}


module.exports = retrievePic;