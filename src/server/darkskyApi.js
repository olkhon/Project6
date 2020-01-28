async function getWeather(lng, lat, inputDateArrival) {

    const fetch = require('node-fetch')
    const baseurlDarksky = 'https://api.darksky.net/forecast/';
    const dotenv = require('dotenv');
    dotenv.config();
    const darkskyApiPin = process.env.darksky_key;

    //lngData = lng;
    //latData = lat;
    //console.log(lng, lat);

    try {


        const res = await fetch(`https://api.darksky.net/forecast/${darkskyApiPin}/${lng},${lat},${inputDateArrival}`);
        const data = await res.json();
        console.log(data);
        const degrees = data.currently.temperature;
        console.log(degrees);

        // calculate Celcius from Fahrenheit value
        const x = degrees - 32;
        const y = 1.8;
        const temperaturePlain = x / y;
        const temperature = temperaturePlain.toFixed(2)

        //return temperature in Celsius
        return (temperature);

    } catch (error) {
        console.log("error", error);
    }


    // get comparison value two weeks to input value
    //const d = new Date();
    //     d.setUTCMonth(1, 5);

}

module.exports = getWeather;