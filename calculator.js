const express = require("express"); // to import express install express
const bodyParser = require("body-parser");//to import body-parser install body-parser

const app = express(); // var app is called is app.
app.use(bodyParser.urlencoded({extended:true}));

//for simple Calculator
app.get("/",function(req,res){                  // to get "/" that is home route
  res.sendFile(__dirname+"/index.html");
})
app.post("/",function(req,res){               //to catch value from template when we submit form .
  var num1=Number(req.body.num1);// num1 and num2 is input name in template.
  var num2=Number(req.body.num2);
  var result=num1+num2;
  res.send("result = "+result);
})


// for BMI Calculator.
app.get("/bmi",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
})
app.post("/bmi",function(req,res){
  var height=Number(req.body.height);
  var weight=Number(req.body.weight);
  var result_of_bmi=height*weight;
  res.send("Bmi result = "+result_of_bmi);
})

// here we are listen on localhost:3000
app.listen(3000,function(){
  console.log("server is start!");
})
