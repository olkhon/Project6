async function getWeather(lng, lat, newDateArrival) {

    const fetch = require('node-fetch')
    const baseurlDarksky = 'https://api.darksky.net/forecast/';
    const dotenv = require('dotenv');
    dotenv.config();
    const darkskyApiPin = process.env.darksky_key;

    lngData = lng;
    latData = lat;
    console.log(lng, lat);

    try {


        const res = await fetch(`https://api.darksky.net/forecast/${darkskyApiPin}/${lngData},${latData}`);
        const data = await res.json();
        console.log(data);
        const temperature = data.currently.temperature;
        console.log(temperature);
        return (temperature);

    } catch (error) {
        console.log("error", error);
    }


    // get comparison value two weeks to input value
    //const d = new Date();
    //     d.setUTCMonth(1, 5);

}

module.exports = getWeather;