async function getCoordinates(data) {

    const dotenv = require('dotenv');
    dotenv.config()

    const userName = process.env.user_name;

    const fetch = require('node-fetch');


    const url = `http://api.geonames.org/searchJSON?q=${data}&maxRows=10&username=${userName}`;

    try {
        const res = await fetch(url);
        const output = await res.json();
        return {
            lng: output.geonames[0].lng,
            lat: output.geonames[0].lat,
            name: output.geonames[0].countryName
        };
        console.log(lng, lat, name);
    } catch (error) {
        console.log(error)
        return error;
    }
};

module.exports = getCoordinates;