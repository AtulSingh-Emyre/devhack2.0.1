//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();



																							// const mysql = require('mysql');

																							// var con = mysql.createConnection({
																							//   // host: "localhost",
																							//   // user: "root",
																							//   // password: "1234",
																							//   // port: "3306",
																							//   host     : "localhost",
																							//   user     : "root",
																							//   password : "1234",
																							//   database : "UserDetails",
																							//   port: "3306",
																							// });

																							// con.connect(function(err) {
																							//   if (err) throw err;
																							//   console.log("Connected!");
																							// });











app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get("/home",function(req,res){

res.render('home');
});
app.get("/",function(req,res) {
	//res.render("home",{homeText:homeStartingContent});
	// var locals = {
 //    homeText: homeStartingContent,
 //    Posts:Posts
 //  };
  res.render('home');
});
let posts = [];
let data = [];
var uid;
var pwd;

app.get("/blog", function(req, res){
  res.render("blog", {
    startingContent: homeStartingContent,
    posts: posts
    });
});



app.get("/login",function(req,res){

	res.render("login");

});



app.get("/home",function(req,res){
	var locals = {
    homeText: homeStartingContent,
    Posts:Posts
  };
  res.render('home', locals);
  

});

app.get("/compose",function(req,res){
	res.render("compose");	
});
app.get("/register",function(req,res){
	res.render("register");	
});

app.post("/compose",function(req,res){

var post = {
	postTitle:req.bodyParser.entry,
	postBody:req.bodyParser.postBody,
};

	Posts.push(post);
	
	res.redirect("/");


});


app.post("/login",function(req,res){

var datax = {
	postTitle:req.bodyParser.email,
	postBody:req.bodyParser.password,
};

	
	res.redirect("/");


});



// app.POST("/login",function(req,res){
// 	uid = res.bodyParser.email;
// 	pwd = res.bodyParser.password;
// 	console.log(uid);
// 	res.render("dash");


// });
app.get("/post/:term",function(req,res){
	
	for(var i=0;i<Posts.length;i++){
	if(_.lowerCase(req.params.term)==_.lowerCase(Posts[i].postTitle)){
	console.log("Match found!!!");
	res.render("post",{Title:Posts[i].postTitle,
						Body:Posts[i].postBody.substring(0,100)+"...",
						});
	}
	else{
		console.log("match not found");
		res.redirect("/");
	}
}});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
//con.end();
