require("dotenv").config();

var keys = require("./keys.js");

var axios = require("axios");

/* ***************************************OMDB MOVIE FUNCTION**********************************************/
var movieName = process.argv[2];

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// console.log(queryUrl);

axios.get(queryUrl).then(
    function(response) {
        console.log("Movie Title: " + response.data.Title);
        console.log("Release Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.Ratings[0].Value);
        console.log("Rotten Tomatoes Score: " + response.data.Ratings[1].Value);
        console.log("Country of Production: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
    }
)


/* ***************************************SPOTIFY  FUNCTION************************************************/
// var spotify = new Spotify(keys.spotify);

/* ***************************************CONCERT   FUNCTION**********************************************/

/* ***************************************DO WHAT IT SAYS FUNCTION*****************************************/