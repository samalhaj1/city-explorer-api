'use strict';
const express = require('express');


const cors = require('cors');
const axios = require('axios');
const Movies = require('../models/movie.model');
const PORT = process.env.PORT;
const REACT_APP_MOVIE_KEY = process.env.REACT_APP_MOVIE_KEY;

require('dotenv').config({ path: __dirname + '/.env' });
const app = express();
app.use(cors());
const movieJs = async (request, response) => {

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
};

module.exports = movieJs;
