async function getCoordinates(data) {

    const dotenv = require('dotenv');
    dotenv.config()

    const userName = process.env.user_name;

    const fetch = require('node-fetch');


    const res = await fetch(`http://api.geonames.org/searchJSON?q=${data}&maxRows=10&username=${userName}`);

    try {
        const data = await res.json();

        const lng = data.geonames[0].lng;
        const lat = data.geonames[0].lat;

        console.log(lng, lat);

        return [lat, lng];
    } catch (error) {
        console.log(error)
        return error;
    }
};

module.exports = getCoordinates;