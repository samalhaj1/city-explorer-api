'use strict';

class Movies {
    constructor(title, image) {
        this.title = title;
        this.image = 'https://image.tmdb.org/t/p/w500' + image;


    }
}
module.exports = Movies;