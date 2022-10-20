var express=require('express');
var mycon=require('mysql');
var app=express();
var c=mycon.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'Kgisl@123',
    database:'myproject'
});
c.connect(function(err){
    if(err){console.log(err);}
    else{console.log('connected');}
})
//create query
// var sql='create table signup(id bigint not null primary key auto_increment,username varchar(300),password varchar(300),name varchar(300),email varchar(300),phone varchar(300),status varchar(300))';
// c.query (sql,(err,res)=>{
//     if(err){console.log(err)}
//     else{console.log(res);}
// })
//insert query
// var sql='insert into signup(username,password,name,email,phone,status) values ("pointersgroup@gmail.com","pointers12","priya","pointersgroup@gmail.com","8766827680","0")';
// c.query(sql,(err,res)=>{
//     if(err){console.log(err);}
//     else{console.log(res);}
// })
//update query
// var sql='update signup set username="8768878689" where id="1"';
// c.query(sql,(err,res)=>{
//     if(err){console.log(err);}
//     else{console.log(res);}
// })
//delete query
var sql='delete from signup where id="1"';
c.query(sql,(err,res)=>{
    if(err){console.log(err);}
    else {console.log(res);}
})
