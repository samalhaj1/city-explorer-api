'ues strict';

const express = require('express');


const cors = require('cors');
const axios = require('axios');
const PORT = process.env.PORT;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

require('dotenv').config({ path: __dirname + '/.env' });
const app = express();
app.use(cors());
const weather = require('./data/weather.json');

class Forcast {
    constructor(date, max, min, desc, icon) {
        this.date = date;
        this.max = max;
        this.min = min;
        this.desc = desc;
        this.icon = icon;
    }
};

class Movies {
    constructor(title, image) {
        this.title = title;
        this.image = 'https://image.tmdb.org/t/p/w500' + image;


    }
}

app.get('/', (request, respunce) => {

    respunce.send('Hello World 👋 My Name is Sam');
});



app.get("/weather", async (request, response) => {
    // const lon = request.query.lon;
    // const lat = request.query.lat;
    const city_name = request.query.city;
    
        //  if (lon && lat) {
        //    //URL...........
        // const url = `http://api.weatherbit.io/v2.0/history/daily?city=${city_name}&key=${WEATHER_API_KEY}`
        // const weatherData = await axios.get(url);

        // response.json(weatherData);

    
 const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city_name}&key=${process.env.WEATHER_API_KEY}`;
            const weatherData = await axios.get(url);
    try {
        if (city_name) {
           
            const renderedData = weatherData.data.data.map((day) => { return new Forcast(day.datetime, day.high_temp, day.low_temp, day.weather.description, day.weather.icon) })
            response.json(renderedData);
console.log("hi")

        } else {
            response.send("<h1>Error!</h1>");
        }
    } catch (error) {
        response.send('error getting data from weather' + error)



    }



});






app.listen(3031, () => {
    console.log('server started on port');

});


app.get("/movies", async (request, response) => {
    const city_name = request.query.query;
    const MOVIES_API_KEY = process.env.MOVIES_API_KEY;

    try {
        if (city_name) {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&query=${city_name}`;
            const moviesData = await axios.get(url);
            const renderedData = moviesData.data.results.map((movie) => { return new Movies(movie.original_title, movie.poster_path) })
            response.json(renderedData);

        } else {
            response.send("<h1>Error!</h1>");
        }
    } catch (error) {
        console.log("Something wrong.");
    }
});





// const result = weather.find(item => {
//     return (item.city_name.toLowerCase() === city_name.toLowerCase())

// }
// );


//try{

//if (result) {
//     response.json(new Forcast(result.data.datetime, result.data.weather.description))

//  }
// else {
// respunce.send('<h1> error <h1>')
// }
// }
//  catch (error) {
//     response.json(error.data)
// };


// response.json(data);




