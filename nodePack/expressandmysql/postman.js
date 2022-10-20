var express=require('express');
var mycon=require('mysql');
var cors=require('cors');
var bodyparser=require('body-parser');
const { request } = require('express');
var app=express();
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));
var c=mycon.createConnection({
    host:"localhost",
    post:3306,
    user:"root",
    password:"Kgisl@123",
    database:""
})
c.connect(function(err){
    if(err){console.log(err);}
    else{console.log('Database connected');}
})
app.post('/signup',(request))