'use strict'
const express = require('express');

const weatherJs = require('./weather.js')
const cors = require('cors');
const Forecast = require('../models/weather.model');
const axios = require('axios');
const PORT = process.env.PORT;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

require('dotenv').config({ path: __dirname + '/.env' });
const app = express();
app.use(cors());
const weather = require('./data/weather.json');

const weatherJs = async (request, response)  => {
        // const lon = request.query.lon;
        // const lat = request.query.lat;
        const city_name = request.query.city;
        
             if (lon && lat) {
               //URL...........
            const url = `http://api.weatherbit.io/v2.0/history/daily?city=${city_name}&key=${WEATHER_API_KEY}`
            const weatherData = await axios.get(url);
    
            response.json(weatherData);
    
        
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
        }}}
    
    
        module.exports = weatherJs;