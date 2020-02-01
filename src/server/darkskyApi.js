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

            // calculate Celcius from Fahrenheit value
            const x = degrees - 32;
            const y = 1.8;
            const temperaturePlain = x / y;
            const temperature = temperaturePlain.toFixed(2)



            //return temperature in Celsius
            return [msgTime, temperature];

        } catch (error) {
            console.log("error", error);
        }
    } else {
        try {
            const res = await fetch(`https://api.darksky.net/forecast/${darkskyApiPin}/${lng},${lat},${inputDateArrival}`);
            const data = await res.json();

            const msgTime = data.currently.summary;
            const degrees = data.currently.temperature;
            // calculate Celcius from Fahrenheit value
            const x = degrees - 32;
            const y = 1.8;
            const temperaturePlain = x / y;
            const temperature = temperaturePlain.toFixed(2)

            //return temperature in Celsius
            return [msgTime, temperature];

        } catch (error) {
            console.log("error", error);
        }
    }



}

module.exports = getWeather;