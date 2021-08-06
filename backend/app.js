const express = require('express');
var cors = require('cors');
var app = new express();
app.use(cors());
app.use(express.json());



const booksRouter = require('./src/Routes/bookRoutes');
const authorRouter = require('./src/Routes/authorRoutes');



app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.use('/books',booksRouter);
app.use('/authors',authorRouter);





// Signup
app.post('/signup',function(req,res){
  res.header("Access-Control-Allow-Orgin","*")
  res.header('Access-Control-Allow-Methods: GET,POST, PATCH , PUT, DELETE,OPTIONS');
  console.log(req.body);
  var User ={
     name : req.body.user.name,
      email : req.body.user.email,
      password: req.body.user.password,
  }
  var User =new Userdata(User);
  User.save();
});



app.listen (5000,function(){
    console.log('listening to port 5000');
})