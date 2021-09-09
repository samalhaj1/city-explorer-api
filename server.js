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

app.get('/',
    function (request, respunce) {

        respunce.send('Hello World 👋 My Name is Sam');
    });

app.get('/weather', (request, response) => {
    try {
        const lon = request.query.lon;
const lat = request.query.lat;
const searchQuery = request.query.city_name;
class Forcast {
    constructor(date, description) {
        this.date = date
        this.description = description
    }
}
const result = weather.find(item => {
            return (item.city_name.toLowerCase() === searchQuery.toLowerCase())

        });
        if (result) {
            response.json(new Forcast(result.data.datetime, result.data.weather.description))

        }
    }
    catch (error) {
        response.json(error.data)
    };


    response.json(data);


});

app.listen(3001, () => {
    console.log('server started on port');

});
