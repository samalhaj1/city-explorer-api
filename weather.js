app.get("/weather", async (request, response) => {
    
    const city_name = request.query.city;
    

    
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