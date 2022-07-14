var exp=require('express');

var app=exp();

app.get('/greet',function(req,res){
   res.send("<h1>Welcome to Web App</h1>");
 
});

app.get('/login',function(req,res){
       res.sendFile(__dirname+"/login.html");
});

app.get('/logincheck',function(req,res){
	if(req.query.uid=="object" && req.query.Password=="knowit")
		res.send("Login successful");
	else
		res.send("Failed Login");	
});

app.all('*',function(req,res){
   res.send("<h1>Welcome</h1>");
});


app.listen(8000,function(){
  console.log("Server started");
});