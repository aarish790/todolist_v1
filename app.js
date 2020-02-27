const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
var app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("Public"));



var items=['buy food','cook food','eat food'];
var workItems=[];
app.set('view engine', 'ejs');

app.get("/",function(req,res){
	var today=new Date();
	
    var option={
		weekday:'long',
		year:'numeric',
		day:'numeric',
		month:'long'
	};
	var currentDay=today.toLocaleDateString("en-us" , option);
	
	//res.render("list",{TitleList:"TTTTTtDay" ,newitems:items });
	res.render("list",{TitleList:currentDay,newitems:items });
     

}); 

app.post("/",function(req,res){
	
	
	console.log(req.body);
	var itemName=req.body.ITEM;

	
	if(req.body.list==="WorkList"){
		workItems.push(itemName);
		res.redirect("/work");

	}else{
		items.push(itemName);
		res.redirect("/");
	}

});

app.get("/work",function(req,res){

	res.render("list",{TitleList:"WorkList",newitems:workItems});
});



app.get("/aboutus",function(req,res){
	res.render("aboutus");

});



app.listen(3000,function(){
	console.log("server is running at port 3000");
});

//This list only conatin home,work and about us list