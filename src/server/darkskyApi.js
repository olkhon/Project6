async function getWeather(lng, lat, inputDateArrival, inputCurrentTime) {

    const fetch = require('node-fetch')
    const baseurlDarksky = 'https://api.darksky.net/forecast/';
    const dotenv = require('dotenv');
    dotenv.config();
    const darkskyApiPin = process.env.darksky_key;



    if ((inputDateArrival - inputCurrentTime) > 604800) {
        try {
            const res = await fetch(`https://api.darksky.net/forecast/${darkskyApiPin}/${lng},${lat}`);
            const data = await res.json();


            const msgTime = "Please be aware that your trip is to far in the future for accurate weather information.";
            const degrees = data.currently.temperature;


            //return temperature 
            return [msgTime, degrees];

        } catch (error) {
            console.log("error", error);
        }
    } else {
        try {
            const res = await fetch(`https://api.darksky.net/forecast/${darkskyApiPin}/${lng},${lat},${inputDateArrival}`);
            const data = await res.json();
            console.log(data)
            const msgTime = data.currently.summary;
            const temperature = data.currently.temperature;

            return [msgTime, temperature];

        } catch (error) {
            console.log("error", error);
        }
    }



}

module.exports = getWeather;