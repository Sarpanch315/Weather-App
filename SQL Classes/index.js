const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta',
    password: '102952'
  });

let getRandomUser = () => {
    return[
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
     
    ];
};



// HOME Route
app.get("/home", (req,res) => {
    let q = "SELECT count(*) from user";
    try {
     connection.query(q, (err,result) => {
            if(err) throw err;
            let count = result[0]["count(*)"];
            res.render("home",{count});
            });
        }
        catch (err) {
           console.log(err);
           res.render("Some error in data base");
        }
    
})

// SHOW Route
app.get("/show" , (req,res) => {
  let q = "SELECT * FROM user";
  try {
    connection.query(q, (err,users) => {
           if(err) throw err;
           res.render("showUser",{users});
           });
       }
       catch (err) {
          console.log(err);
          res.render("Some error in data base");
       }
  
});

// EDIT Route
app.get("/user/:id/edit",(req,res) => {
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err,result) => {
           if(err) throw err;
           let user = result[0];
           res.render("edit",{user});
           });
       }
       catch (err) {
          console.log(err);
          res.render("Some error in data base");
       }
  
});
// UPDATE (DB) Route
app.patch("/user/:id", (req,res) => {
  let {id} = req.params;
  let {password : newPassword,username : NewName} = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err,result) => {
           if(err) throw err;
           let user = result[0];
           if(newPassword != user.password){
            res.send("WRONG pASSWORD");
           }
           else{
            let q2 = `UPDATE user SET username='${NewName}' WHERE id = '${id}'`;
            connection.query(q2,(err,result) => {
                if(err) throw err
                res.redirect("/show");
            })
           }
           
           });
       }
       catch (err) {
          console.log(err);
          res.render("Some error in data base");
       }
  
});    

app.listen(8080, () => {
    console.log("8080 is listening");
});

//try {
//   connection.query(q,[data] , (err,result) => {
 //       if(err) throw err;
 //       console.log(result);
 //  });
//}
//catch (err) {
   // console.log(err);
//}

//connection.end();

//let q = "INSERT INTO user (id,username,email,password) VALUES ?";
//let data = [];
// for (let i = 1 ; i <= 100; i++){
  //  data.push(getRandomUser());
 //}
