
require("dotenv").config();
var fs = require("fs");
var request = require("request");
var inquirer = require("inquirer");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js")
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

//What does the user want to do
inquirer.prompt(
    {
        type: "list",
        name: "questions",
        message: "What do you want to do?",
        choices: ["Movie", "Tweets", "Songs"]

        // run different function depending on choice
    }).then(function (response) {
        console.log(response.questions)
        if (response.questions === "Movie") {
            runMovie()
        }
        else if (response.questions === "Tweets") {
            runTweets()
        } else if (response.questions === "Songs") {
            runSpotify()
        }

    })

// Run Movie function
function runMovie() {
    // prompt for favorite

    inquirer.prompt(
        {
            type: "input",
            name: "usermovie",
            message: "What is your favorite movie?",

            // Capture response from name
        }).then(function (response) {

            // Store in Variable
            var movieName = (response.usermovie);
            // cant get this to work properly!!!
            // if(response.username = " "){
            //     movieName = "Mr Nobody"
            // }

            var omdbQueryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
            // console.log(omdbQueryUrl);

            request(omdbQueryUrl, function (error, response, body) {

                //   // If the request is successful
                if (!error && response.statusCode === 200) {

                    //     // Parse the body for data
                    console.log("Movie Title: " + JSON.parse(body).Title);
                    console.log("Release Year: " + JSON.parse(body).Year);
                    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
                    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
                    console.log("Produced In: " + JSON.parse(body).Country);
                    console.log("Language: " + JSON.parse(body).Language);
                    console.log("Plot: " + JSON.parse(body).Plot);
                    console.log("Actors: " + JSON.parse(body).Actors);
                }
            });
        });

}

// // // * `spotify-this-song`
// I know the below should be the input type, but not clear how to insert it.
fs.readFile("random.text", "utf8", function (error, data) {
    if (error) {
        console.log(error)
    }
    // console.log(data);
    var songText = (data);
    // console.log(songText);
});

function runSpotify() {



    inquirer.prompt(
        {
            type: "input",
            name: "usersong",
            message: "What is your favorite song?",

            // grab user input from name
        }).then(function (song) {
            var songName = (song.usersong);

            // Cant get this to work properly!!!
            // if(song.usersong === " "){
            //     songName = "The Sign"
            // }
            // console.log(songName);
            spotify.search({ type: 'track', query: songName }, function (err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }

                //    parse data from spotify object
                var currSong = data.tracks.items[0];
                // console.log(currSong);
                console.log(currSong.artists[0].name);
                console.log(currSong.album.name);
                console.log(currSong.album.external_urls.spotify)
                console.log(currSong.name)
            });
        });
}

// //  * `my-tweets`

function runTweets() {

    inquirer.prompt(
        {
            type: "confirm",
            message: "Want to see my tweets",
            name: "tweetchoice",
            default: false,


        }).then(function (choice) {
            if (!choice.tweetchoice){
                console.log("I'm offended! Go Away!");
            }
            if (choice.tweetchoice) {
                console.log("OK, I'll show you them");
                // pass my twitter handle into the argument
                var params = {
                    screen_name: 'codejmc11'
                };
                client.get('statuses/user_timeline', params, function (error, tweets, response) {
                    if (!error) {
                        // console.log(tweets);
                        for (i = 0; i < tweets.length; i++) {
                            console.log(tweets[i].created_at)
                            console.log(tweets[i].text)
                        }

                    }
                });
            }
        })
}








