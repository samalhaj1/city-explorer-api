'ues strict';

const express = require('express');

const weatherJs = require('./weather.js')
const cors = require('cors');
const axios = require('axios');
const PORT = process.env.PORT;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

require('dotenv').config({ path: __dirname + '/.env' });
const app = express();
app.use(cors());
const weather = require('./data/weather.json');


app.get('/', (request, respunce) => {

    respunce.send('Hello World 👋 My Name is Sam');
});
const weatherJs = require('./controller/weather.controller');

const movieJs = require('./controller/movie.controller');

app.get("/weather",weatherJs);

app.get("/movie",movieJs);


app.listen(3031, () => {
    console.log('server started on port');

});








