var request = require('request');
var fs = require('fs');
var Spotify = require('node-spotify-api');

var dotenv = require("dotenv").config();
var keys = require("./keys.js");

//moment js
var moment = require('moment');
moment().format();

//spotify keys
var spotify = new Spotify(keys.spotify);

//variable for input
var command = process.argv[2];
var input = process.argv[3];
/*Deciding which function to run based on user input*/

function runLiri(command, input) {
    switch (command) {
        case "movie-this":
            console.log("Your chosen movie info: " + input);
            getMovie(input);
            break;
        case "spotify-this-song":
            console.log("Your chosen song: " + input);
            getSpotify(input);
            break;
        case "concert-this":
            console.log("Your band/artist: " + input);
            getConcert(input);
            break;
        case "do-what-it-says":
            console.log("Do what it says: ");
            doIt();
            break;
        default:
            console.log("Sorry, LIRI doesn't know that.  Please enter a command such as: 'movie-this', 'spotify-this-song', 'concert-this', or 'do-what-it-says'");
    }
};

runLiri(process.argv[2], process.argv[3]);

/* ***************************************OMDB MOVIE FUNCTION**********************************************/

function getMovie(movieName) {
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    // console.log(queryUrl);
    request(queryUrl, function(error, response, body) {
        if (!error) {
            console.log("Movie Title: " + JSON.parse(body).Title);
            console.log("Release Year: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
            console.log("Rotten Tomatoes Score: " + JSON.parse(body).Ratings[1].Value);
            console.log("Country of Production: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
        }
    })
}

/* ***************************************SPOTIFY  FUNCTION************************************************/
function getSpotify(songName) {
    if (songName === "null") {
        songName = "the sign";
    }
    spotify.search({
            type: 'track',
            query: songName,
            limit: 1
        },
        function(err, data) {
            // console.log(err);
            // console.log("This is the data:" + data);
            if (err) {
                return console.log("There was an error: " + err);
            } else {
                console.log(data);
                var songTitle = data.tracks.items[0].name;
                var songArtist = data.tracks.items[0].artists[0].name;
                var songAlbum = data.tracks.items[0].album.name;
                var preview_url = data.tracks.items[0].preview_url;

                console.log("------------*Spotify Results*------------");
                console.log("Artists: " + JSON.stringify(songArtist));
                console.log("Album: " + songAlbum);
                console.log("Song Title: " + songTitle);
                console.log("Spotify Preview: " + previewURL);
                console.log("-----------------------------------------");
            }
        }

    )
};



/* ***************************************CONCERT   FUNCTION**********************************************/

/* ***************************************DO WHAT IT SAYS FUNCTION*****************************************/