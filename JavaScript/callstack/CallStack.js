/*let h1 = document.querySelector("h1");
/*setTimeout(() =>{
    h1.style.color = "red";
},1000);
setTimeout(() =>{
    h1.style.color = "orange";
},2000);
setTimeout(() =>{
    h1.style.color = "pink";
},3000);
setTimeout(() =>{
    h1.style.color = "green";
},4000);
function changeColor(color,delay){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("color changed");
        },delay);
    });
    }
    async function demo(){
        await changeColor("red",1000);
        await changeColor("green",1000);
        await changeColor("blue",1000);
        await changeColor("pink",1000);
        changeColor("black",1000);
    }
    /*changeColor("red",1000).then(() =>
    {
        console.log("color changed");
        return changeColor("green",1000);
    })
    .then(() => {
        console.log("color 2 changed");
        return changeColor("orange",1000);
    })
    .then(() =>{
        console.log("color 3 changed");
        return changeColor("yellow",1000);
    })
    .then(() => {
        console.log("color 4 changed");
    })
    .catch(() => {
        console.log("error");
    })*/
    
//changeColor("red",1000,()=>{
//  changeColor("blue",1000,() => {
//   changeColor("orange",1000,() =>{
//        changeColor("green",1000)
//    });
//  });
//});
/*function saveTodb(data){
    
    return new Promise((resolve,reject) => {
        let intspeed = Math.floor(Math.random()*10)+1;
        if(intspeed > 4){
            resolve("Accepted");
        }
        else{
            reject("weak connection");
        }
     } );
}
let request = saveTodb();
console.log(request);
request.then(
    ()=>{
        console.log("issue clear");
    }
)
.catch(()=>{
    console.log("resole faild");
})
saveTodb("apna college").then((result)=>{ // promises chaining
    console.log("data 1 ");
    console.log(result);
    return saveTodb("tina");
})
.then((result) => {
    console.log("data 2 ");
    console.log(result);
    return saveTodb("bye");
})
.then((result) => {
    console.log("darta");
    console.log(result);
})
.catch((error) => {
    console.log("data failed");
    console.log(error);
})*/
let url = "https://catfact.ninja/fact";
/*fetch(url)
.then((response) => {
   // console.log(response);
    return response.json();
})
.then((data) => {
    console.log(data.fact);
    return fetch(url);
})
.then((response2) => {
    return response2.json();
})
.then((data2) => {
    console.log(data2.fact);
})
.catch((error) => {
    console.log("error is "+ error);
})
async function getfacts() {
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact); 
    } catch(er){
        console.log("there is an error " + er);
    }
    
}*/
let btn = document.querySelector("button");

/*btn.addEventListener("click", async () => {
    let fact= await getfacts();
    let p = document.querySelector('p');
    p.innerText = fact;
});
async function getfacts () {
    try { let res = await axios.get(url);
         return res.data.fact;
    }
    catch(e){
        return "data not found";
    }
}*/
let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
    let data = await getImg();
    let res = document.querySelector("img");
    res.setAttribute("src",data);
})
async function getImg() {
    try {
        let img = await axios.get(url2);
        return img.data.message;
    }
    catch(err){
        console.log("error found in " + err);
        return "there is an error in link";
    }}
    let url3 = "https://icanhazdadjokes.com";
    async function jokes(){
        try{
        let jok = await axios.get(url3);
        console.log(jok.data);
    }
    catch(er){
        console.log("error is "+ er);
    }
}