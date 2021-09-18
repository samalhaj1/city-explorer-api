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




    const shutTime = 10000;
  const tenSeconds = (Date.now() - cacheObject.timeStamp) > shutTime;
  if (tenSeconds) {
    cacheObject = new Cache();
  }
  const findData = cacheObject.movies.find(
    (location) => location.city_name === city_name
  );
  if (findData) {
    response.json(findData.data);
  } else {
    const movie = "https://api.themoviedb.org/3/search/movie";
    const movieResponse = await axios.get(
      `${movie}?query=${city_name}&api_key=${REACT_APP_MOVIE_KEY}`
    );

    if (city_name) {
    let data = movieResponse.data.results.map((data1) => {
    console.log(data1);
     return new Movies(
    `Title: ${data1.title}`,
    `Overview: ${data1.overview}`,
    `Average votes: ${data1.vote_average}`,
    ` Total Votes: ${data1.vote_count}`,
    `${data1.poster_path}`,
     `popularity:${data1.popularity}`,
    `release_date:${data1.release_date}`
 );
});
  
        cacheObject.movies.push({
          city_name: city_name,
          data: data,
        });
  
    

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
}};}

module.exports = movieJs;
