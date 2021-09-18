'ues strict';

const express = require('express');
const movieJs = require('./controllers/movie.controller');
const weatherJs = require('./controllers/weather.controller');
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




app.get("/weather",weatherJs);

app.get("/movie",movieJs);


app.listen(3031, () => {
    console.log('server started on port');

});








