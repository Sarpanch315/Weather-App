/*console.log("Hello World");
let a = 5;
let b = 4;
let sum = a+b;
console.log("the sum is : "+ sum );
//let output = "The sum of a and b : " + (a+b) + " Rupees";
let output = `the sum of a and b ${a+b}`; //Template literals
console.log(output);
let size = "M";
if(size === "XL"){
 console.log("Price is 250");    
}
else if(size === "L"){
    console.log("Price is 200");
}
else if(size ===  "M"){
    console.log("Price is 100");
}
else if(size ==="S"){
    console.log("Price is 50");
}
//alert("this is danger");
//console.error("this is error");
//let name = prompt('enter your name');
//console.log(name);
/*let num = 440;
if(num%10 === 0){
    console.log("good");
}
else {
    console.log("Bad");
}*/
/*let name = prompt("Enter Your Name");
let age = prompt("enter your age");
console.log(`${name} is ${age} year old.`);*/
/*let num = 2;
switch (num) {
    case 1: {
                     console.log("January, Febrarury, March");
                     break;
                }
    case 2: {
                    console.log("April,May,June");
                     break;
                }     
    case 3: {
                     console.log("July, August,September");
                     break;
                }
     case 4: {
                    console.log("October, November, December");
                    break;
                }                  

    default:{
                  console.log("Default");
        break;
    }
}*/
/*let str = "gmandeep";
let num = str.length;
if((str[0] === 'A' && num >= 5  )|| (str[0] === 'a' && num >= 5))
{
    console.log("Golden String");
}
else{
    console.log("Not a Golden String");
}*/
/*let i = 3;
let j = 5;
let k = 1;
if(i > j && i > k){
    console.log("greater ", i);
}
else if (j > i && j > k){
    console.log('greater ',j);
}
else {
    console.log(k);
}
let num = 231;
let num2 = 343;
if((num%10) === (num2%10)){
    console.log('same digit');
}
else {
    console.log("not a same digit");
}*/
/*let msg = "   hello  ";
console.log(msg.indexOf("i"));
// method Chaining
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);*/
// String Slicing
/*let msg = "Hello World";
let newMsg = msg.slice(2,7);
console.log(newMsg);

console.log(msg.slice(-3));*/
/*et msg = "Hello World";
console.log(msg.replace("ello","wae")); //Always replace first occurance
console.log(msg.repeat(3)); // repeat the string the number of times*/
/*let cars = ["audi", "mercedez", "bmw", "mg"];
cars.push("creta");
cars.unshift("xuv"); // adding in the start 
cars.shift();
let nCars = ["mahindra","tata"];
console.log(cars.concat(nCars));
let arr = [2,3,5,3,2,-2];
let n = 3;
let ans = arr.slice(0,n);
console.log(ans);
let n = prompt("Enter a number");
n = parseInt(n);
for(let i = n; i <= n*10; i = i+n){
    console.log(i);
}
const favMovie = "avtar";
let Guess = prompt("enter the Movie");
while((Guess != favMovie) && (Guess != "quit")){
    console.log("Wrong");
    
    Guess = prompt("Enter the Movie");
}
if(Guess == favMovie){
    console.log("Correct");
}
else {
    console.log("Better Luck  Next Time");
}*/
let h3 = document.createElement("h3");
h3.innerText= "hey i am h3";
document.querySelector("body").append("h3");