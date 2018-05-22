
require("dotenv").config();
var fs = require("fs");
var request = require("request");
var inquirer = require("inquirer");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js")
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


// {
//         type: "confirm",
//         message: "Want to see my tweets",
//         name: "usermovie",
//         default: false
//     },

//     //     {
//     //         type: "confirm",
//     //         message: "Do what it says",
//     //         name: "usermovie",
//     //         default: false
//     //     // }]).then







// // * `movie-this`

inquirer.prompt(
    {
        type: "list",
        name: "questions",
        message: "What do you want to do?",
        choices: [ "Movie", "Tweets", "Songs"]
    }).then (function (response){
        console.log(response.questions)
        if(response.questions === "Movie"){
            runMovie()
        }
        else if (response.questions === "Tweets"){
            runTweets()
        }else if (response.questions === "Songs"){
            runSpotify()
        }
        
    }) 


function runMovie (){

inquirer.prompt(
    {
        type: "input",
        name: "usermovie",
        message: "What is your favorite movie?",


    }).then(function (response){
        // console.log(response);
        // console.log(response.usermovie);
        // var movieArgs = response.usermovie;
        var movieName = (response.usermovie);
        console.log(movieName);
        var omdbQueryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
        console.log(omdbQueryUrl);

        request(omdbQueryUrl, function(error, response, body) {

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

function runSpotify () { 



inquirer.prompt(
    {
        type: "input",
        name: "usersong",
        message: "What is your favorite song?",


    }).then(function (song) {
        // console.log(song);
        // console.log(song.usersong);
        var songName = (song.usersong);
        // console.log(songName);
        spotify.search({ type: 'track', query: songName }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

            // console.log(data);
            var currSong = data.tracks.items[0];
            // console.log(currSong);
            console.log(currSong.artists[0].name);
            console.log(currSong.album.name);
            console.log(currSong.album.external_urls.spotify)
            console.log(currSong.name)
        });
    });
}


//   // If the request is successful
//   if (!error && response.statusCode === 200) {
//     console.log(response);
//     console.log(body);
//     // Parse the body for data
//     // console.log("Song Title: " + JSON.parse(body).Title);
//     // console.log("Song Name: " + JSON.parse(body).Year);
//     // console.log("Preview Link: " + JSON.parse(body).imdbRating);
//     // console.log("Album: " + JSON.parse(body).Ratings[1].Value);

//   }
//   else{
//       console.log(error);
//   }
// });



// //  * `my-tweets`

function runTweets() {

inquirer.prompt(
    {
        type: "confirm",
        message: "Want to see my tweets",
        name: "tweetchoice",
        default: false,


    }).then(function (choice) {
        if (choice.tweetchoice) {
            console.log("OK, I'll show you them");

            var params = {screen_name: 'codejmc11'};

            client.get('statuses/user_timeline', params, function(error, tweets, response) {
              if (!error) {
                // console.log(tweets);
                for (i =0; i < tweets.length; i++){
                    console.log(tweets[i].created_at)
                    console.log(tweets[i].text)
                }

              }
                          });
        }
    })
}







    //          request(twitterQueryUrl, function(error, response, body) {

    //         // //    // If the request is successful
    //            if (!error && response.statusCode === 200) {
    //              console.log(JSON);
    //         // // // // //      // Parse the body for data
    //         // // // // //      console.log("TWEETS: " + JSON.parse(body).XXXX);
    //     } else {
    //         console.log("I'm offended, Go Away!")

    //     };
    // });









// //  + twitterName + "ZIe5dVl8OHQJM5nq7p8kEJDzt"+ twitterName + "ZIe5dVl8OHQJM5nq7p8kEJDzt"
//  
// // // //      console.log("Song Name: " + JSON.parse(body).Year);
// // // //      console.log("Preview Link: " + JSON.parse(body).imdbRating);
// // // //      console.log("Album: " + JSON.parse(body).Ratings[1].Value);

//    }
//  });


// * `do-what-it-says`
