// require("dotenv").config();



var fs = require("fs");
var request = require("request");




// * `movie-this`

// var movieArgs = process.argv;
// var movieName = "";


// for (var i = 2; i < movieArgs.length; i++) {

//     if (i > 2 && i < movieArgs.length) {
  
//       movieName = movieName + "+" + movieArgs[i];
  
//     }
  
//     else {
  
//       movieName += movieArgs[i];
  
//     }
//   }
  
// var omdbQueryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";  

// console.log(omdbQueryUrl);

// request(omdbQueryUrl, function(error, response, body) {

//   // If the request is successful
//   if (!error && response.statusCode === 200) {

//     // Parse the body for data
//        console.log("Movie Title: " + JSON.parse(body).Title);
//     console.log("Release Year: " + JSON.parse(body).Year);
//     console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
//     console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
//     console.log("Produced In: " + JSON.parse(body).Country);
//     console.log("Language: " + JSON.parse(body).Language);
//     console.log("Plot: " + JSON.parse(body).Plot);
//     console.log("Actors: " + JSON.parse(body).Actors);

//   }
// });





// // * `spotify-this-song`

// fs.readFile("random.txt", "utf8", function(error, data) {
    var spotifyArgs = process.argv;
    var spotifyName = "";

    
    
    for (var i = 2; i < spotifyArgs.length; i++) {
    
        if (i > 2 && i < spotifyArgs.length) {
      
          spotifyName = spotifyName + "+" + spotifyArgs[i];
      
        }
      
        else {
      
          spotifyName += spotify[i];
      
        }
      }
      
    var spotifyQueryUrl = "http://www.omdbapi.com/?t=" + spotifyName + "&y=&plot=short&apikey=trilogy";  
    
    console.log(spotifyQueryUrl);
    
    request(spotifyQueryUrl, function(error, response, body) {
    
      // If the request is successful
      if (!error && response.statusCode === 200) {
    
        // Parse the body for data
           console.log("Movie Title: " + JSON.parse(body).Title);
        console.log("Release Year: " + JSON.parse(body).Year);
        console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
           
      }
    });
 









// * `my-tweets`



// * `do-what-it-says`
