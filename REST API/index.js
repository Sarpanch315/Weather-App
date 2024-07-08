const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        id : uuidv4(),
        usrname : "apnacollege",
        content : "I Love Coding"
    },
    {
        id : uuidv4(),
        usrname : "rahul",
        content : "Crickett Playing"
    },
    {
        id : uuidv4(),
        usrname : "Sonu",
        content : "Talking"
    },
    {
        id : uuidv4(),
        usrname : "sabend",
        content : "Love fight"
    },
    {
        id : uuidv4(),
        usrname : "Ayush",
        content : "Travelling"
    },    
]

app.get("/posts", (req,res) => {
    res.render("index.ejs",{posts});
});

app.get("/posts/new", (req,res) => {
    res.render("new.ejs");
});

app.post("/posts", (req,res) => {
    let {usrname,content} = req.body;
    let id = uuidv4();
    posts.push({id,usrname,content});
    res.redirect("/posts");
});


app.get("/posts/:id", (req, res) => {
    // Fix the comparison in .find()
    let { id } = req.params; // Destructure id from req.params directly
    let post = posts.find((p) => p.id === id); // Use strict comparison (===)
    res.render("show.ejs", {posts});
  });

app.get("/posts/:id/edit", (req,res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    res.render("edit.ejs",{posts});

})

app.patch("/posts/:id" , (req,res) => {
    let { id } = req.params;
    let {content} = req.body;
    let post = posts.find((p) => p.id === id);
    post.content = content;
    console.log(post);
    res.send("patch request working");
})
app.listen(port, ()=>{
    console.log("App is Listening");
});