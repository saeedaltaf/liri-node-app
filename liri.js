require("dotenv").config();

var keys = require("./keys.js");

var axios = require("axios");

/*Deciding which function to run based on user input*/

function runLiri(inputOne, inputTwo) {
    switch (inputOne) {
        case "movie-this":
            console.log("Your chosen movie info: " + inputTwo);
            getMovie(inputTwo);
            break;
        case "spotify-this-song":
            console.log("Your chosen song: " + inputTwo);
            getSpotify(inputTwo);
            break;
        case "concert-this":
            console.log("Your band/artist: " + inputTwo);
            getConcert(inputTwo);
            break;
        case "do-what-it-says":
            console.log("Do what it says: ");
            doIt();
            break;
        default:
            console.log("Sorry, LIRI doesn't know that.  Please enter a command such as: 'movie-this', 'spotify-this-song', 'concert-this', or 'do-what-it-says'");
    }
}

runLiri(process.argv[2], process.argv[3]);

/* ***************************************OMDB MOVIE FUNCTION**********************************************/
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// console.log(queryUrl);

axios.get(queryUrl).then(
    function getMovie(movieName) {
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
var spotify = new Spotify(keys.spotify);



/* ***************************************CONCERT   FUNCTION**********************************************/

/* ***************************************DO WHAT IT SAYS FUNCTION*****************************************/