var express=require("express");
var mongoose=require("mongoose");
var bodyparser=require("body-parser");
var cors=require("cors");
var path=require("path");

var app=express();
const route=require('./routes/route');

mongoose.connect("mongodb+srv://admin-raghu:test123@cluster0-1mhcm.mongodb.net/contactlist",{useNewUrlParser:true, useUnifiedTopology: true });

mongoose.connection.on('connected',()=>{
    console.log("connected to mogodb");
})

mongoose.connection.on('error',(err)=>{
    if(err){
    console.log("error in connecting:"+err);}
});



const port=3000;

app.use(cors());

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/api',route);


app.listen(port,()=>{
    console.log("Server started");
});
