// require express and path
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
// create the express app
var app = express();

var ig = require('instagram-node').instagram();
// require bodyParser since we need to handle post data for adding a user
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 
// require the mongoose configuration file which does the rest for us
// store the function in a variable
require('./routes.js')(app);

ig.use({
  client_id: '76eae290f6df49f88ee48e463f875905',
  client_secret: '8389da13245844e2bd57fa5c34d4e41f'
});

//the redirect uri we set when registering our application
var redirectUri = 'http://localhost:8000/handleAuth';

app.get('/', function(req, res){
  console.log("ROOT")
  // create a new instance of the use method which contains the access token gotten
   ig.use({
    access_token : accessToken
   });

   ig.user_media_recent("access_token.split('.')[0]", function(err, result, pagination, remaining, limit) {
       if(err) res.json(err);
        
       console.log("RESULT", res.json(result))
  
   });
});

app.get('/authorize', function(req, res){
  console.log("AUTHORIZE")
  // set the scope of our application to be able to access likes and public content
  res.redirect(ig.get_authorization_url(redirectUri, { scope : ['public_content','likes']}) );
});

app.get('/handleAuth', function(req, res){
  console.log("HANDLE AUTH")
  //retrieves the code that was passed along as a query to the '/handleAuth' route and uses this code to construct an access token
  ig.authorize_user(req.query.code, redirectUri, function(err, result){
      if(err) res.send( err );
  // store this access_token in a global variable called accessToken
      accessToken = result.access_token;
  // After getting the access_token redirect to the '/' route 
      res.redirect('/');
  });
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})