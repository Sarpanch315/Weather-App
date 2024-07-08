let btn = document.querySelector("button");
/*console.dir(btn);

btn.addEventListener("click",sayH);
btn.addEventListener("click",asy);
btn.addEventListener("dblclick",asy);
function  sayH(){
    console.log("Ram");
}
function asy(){
    console.log("Hello ");
}

btn.addEventListener("click",function (){
    console.log("button clicked");
    let randomColor = getRandomColor();
    let h3 = document.querySelector("h3");
    h3.style.color = randomColor;
    let div = document.querySelector('div');
    div.style.backgroundColor = randomColor;
    btn.style.color = randomColor;

});

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
    
}
let p = document.querySelector("p");
p.addEventListener('click',
function(){
    console.log(event);
    console.dir(this.innerText);
    this.style.backgroundColor = "red";
})

let inp= document.querySelector("input");
inp.addEventListener("keyup" , function(){
    console.log(event.key);
    console.log(event.code);
    console.log("key press");
    

})*/
let form = document.querySelector("form");
/*form.addEventListener("submit", function(){
    event.preventDefault();
    let inp = document.querySelector("#user");
    let pass = document.querySelector("#pass");
    let ab = form.elements[0].value;
    console.log(ab);
console.dir(inp);
console.log(inp.value);
console.log(pass.value);
})*/
let inp =  document.querySelector("#user");
let para = document.querySelector("p");
inp.addEventListener("change",function(){
    console.log(inp.value);
    para.innerText = inp.value;
})
