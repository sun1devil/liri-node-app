// require("dotenv").config();



var fs = require("fs");
var request = require("request");
var inquirer = require("inquirer");


    

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
           
    



// for (var i = 2; i < movieArgs.length; i++) {

//     if (i > 2 && i < movieArgs.length) {
  
//       movieName = movieName + "+" + movieArgs[i];
  
//     }
  
//     else {
  
//       movieName += movieArgs[i];
  
//     }
//   }
  


// request(omdbQueryUrl, function(error, response, body) {

//   // If the request is successful
//   if (!error && response.statusCode === 200) {

//     // Parse the body for data
//     console.log("Movie Title: " + JSON.parse(body).Title);
//     console.log("Release Year: " + JSON.parse(body).Year);
//     console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
//     console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
//     console.log("Produced In: " + JSON.parse(body).Country);
//     console.log("Language: " + JSON.parse(body).Language);
//     console.log("Plot: " + JSON.parse(body).Plot);
//     console.log("Actors: " + JSON.parse(body).Actors);

//   }
// });





// // // * `spotify-this-song`

// fs.readFile("random.txt", "utf8", function(error, data) {
    
    // var spotifyArgs = process.argv;
    // var spotifyName = "";

    
    
    // for (var i = 2; i < spotifyArgs.length; i++) {
    
    //     if (i > 2 && i < spotifyArgs.length) {
      
    //       spotifyName = spotifyName + "+" + spotifyArgs[i];
    //   screenTop
    //     }
      
    //     else {
      
    //   }
    //   console.log(process.argv);
      
    // var spotifyQueryUrl = "http://open.spotify.com/track/search?q=track:I%20need%20a%20hero/json/20e2b8e631c041ac8391365a7e8fea37" 
    // // + spotifyName + "c456b10c71046b09b127295af165d61";  
    // console.log(spotifyQueryUrl);
   
    
    // request(spotifyQueryUrl, function(error, response, body) {
    
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
// //  + twitterName + "ZIe5dVl8OHQJM5nq7p8kEJDzt"+ twitterName + "ZIe5dVl8OHQJM5nq7p8kEJDzt"
//  var twitterQueryUrl = "https://api.twitter.com/1.1/CODEJMC11/search/tweets/JSON/997983032626696194-CXeR9YNibO69asQrPpJXPZJZUBROnbc";  
    
//  console.log(twitterQueryUrl);

 
//  request(twitterQueryUrl, function(error, response, body) {
 
// //    // If the request is successful
//    if (!error && response.statusCode === 200) {
//      console.log(JSON);
// // // //      // Parse the body for data
// // // //      console.log("Song Title: " + JSON.parse(body).Title);
// // // //      console.log("Song Name: " + JSON.parse(body).Year);
// // // //      console.log("Preview Link: " + JSON.parse(body).imdbRating);
// // // //      console.log("Album: " + JSON.parse(body).Ratings[1].Value);
        
//    }
//  });


// * `do-what-it-says`
