async function getCoordinates(userCity) {
    const dotenv = require('dotenv');
    dotemv.config();
    const fetch = require('node-fetch');
    const baseURL = 'http://apigeonames.org/searchJSON?q=';
    const userName = process.env.user_name;
    const res = await fetch(`${baseURL}${userCity}&username=${userName}`)

    try {

        const data = await res.json();
        const lng = data.geonames[0];
        const lat = data.geonames[1];
        console.log(lat, lng)
        return (lat, lng);

    } catch (error) {
        console.log('error');
    }
}

module.exports(getCoordinates);