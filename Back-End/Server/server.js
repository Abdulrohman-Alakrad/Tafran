const express = require('express');
const app = express();
const PORT = 3500;
const bodyparser = require('body-parser')
const mysql = require('mysql');
// to creare the connection
const connection = mysql.createConnection({
    host : 'localhost',
    user:'root',
    password:"1111",
   database: 'restaurants'
});

// Create DB
app.get("/CRDATA",(req,res)=>{
  let sql = 'CREATE DATABASE if not exists restaurants'
  connection.query(sql,(err,result)=>{
    if(err){
      throw err
    };
    console.log(result);
    res.send("The Database was created successfully")
    console.log("Data Base Created")
    connection.end();

  });
});
//create table inside DB
app.get("/CRTable",(req,res)=>{

  let CreateTable = `CREATE TABLE if not exists restaurants(
   id int primary key AUTO_INCREMENT,
   Name VARCHAR(255),
   address VARCHAR(255),
   Food VARCHAR(500),
   Phonenumber int
   )`
    connection.query(CreateTable,(err,result)=>{
      if(err) throw err;
      console.log(result);
      console.log("Table Was Created On Successfully")
      res.send("Table Was Created")
    })
  });
   // Create User Inside The Databasce
   app.get("/CN",(req,res)=>{
  let newRestaurant = {Name:'Mcdonales',address:"Amman",Food:"hamburger",Phonenumber:'07757231'}
  let sql = 'INSERT into restaurants ?';
  let query = connection.query(sql,newRestaurant,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send("User Was Added")

  })
})

// Search Into the database and appear all the data
app.get("/getUsers",(req,res)=>{
  let serchItem = 'SELECT * FROM restaurants';
  let query = connection.query(serchItem,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send("User Was Added")

  });
});

// Search Into the database and appear all the data
app.get("/getoneUser",(req,res)=>{
  let serchItem = 'SELECT * FROM restaurants WHERE Name'
  let query = connection.query(serchItem,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send("User Was Added")

  });
});




//     connection.query(CreateTable,(err,result)=>{
//     if(err) throw err
//     console.log(result);
//     res.send('The Restarurants Table Created');
//   })
// })

// The connection made
connection.connect((err)=>{
  if(err){
    console.log("There is a error :",err);
  }
  console.log("The Conection made Successfully");
});



// connection.query('SELECT 1+1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//   });
app.get('/',(req, res) => res.send("Hello"));

app.get('/',(res,req) => res.sendfile('index.html'));


app.listen(PORT, () => console.log("The Server is working on "+PORT));