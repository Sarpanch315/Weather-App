//       Assignment Questions Answer
//  Deleted a number occurence that was given
/*let arr = [1,2,3,2,4,3,4,5,7,6];
let num = prompt("enter number");
for(let i = 0; i < arr.length; i++){
    if(arr[i] == num){
        arr.splice(i,1);
        console.log("Element Deleted");
    }}
    for(num1 of arr){
        console.log(num1);
    }
    // Sum of a given digir
    let digit = prompt("enter a digit");
    let len = digit.length;
    console.log(len);
    let sum = 0;
    for(let i = 0; i < len; i++){
        sum += parseInt(digit[i]);
    }
    console.log(sum);
    // factorial of a number 
    let n = prompt("enter a number");
    let fact = 1;
    for(let i = n; i>= 1; i--){
        fact  *= .,,,,,,,,,,,,,,,,,,,,,,,,........................................i;
    }
    console.log(`The factorial  of ${n} is ${fact}`);
    let arr = [3,4,4,5,77,8,2,4,6];
    let largest = 0;
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] >  largest){
            largest = arr[i];
        }
    }
    console.log(largest);

const Student = {
    name : "Ram",
    age : 27,
    marks : 79.98,
    gender : "M"
};
delete Student.gender;
const classInfo = {
    Nitin : {
        marks : 56,
        grade :  "A"
    },
    Raja : {
        marks : 58,
        grade : "B"
    }
};
const calculator = {
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    },
    multi : function(a,b){
        return a*b;
    },
    divide : function(a,b){
        return a/b;
    }
};
//  Qs1.   WriteaJavaScriptfunctionthatreturnsarrayelementslargerthananumber
let arr = [8,9,10,1,2,3,4,5,6,7];
let num = 5;
function getElements(arr,num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > num ){
            console.log(arr[i]);
        }
    }
}
getElements(arr,num);
// Write a JavaScript function to extract unique characters from a string. 
 //  Example:str=“abcdabcdefgggh”ans=“abcdefgh”
 let str = "abcdabcdefgggh";
 function strUnique(str) 
 {
    let ans  = "";
    for(let i  = 0; i < str.length; i++){
        let currentChar = str[i];
        if(ans.indexOf(currentChar) == -1){
            ans += currentChar;
        }
    }
    return ans;
 }
 console.log(strUnique(str));*/
 // Qs3.Write a JavaScript function that accepts a list of country names as input and returns the longest country name as  output.
 // Example:country=["Australia","Germany","UnitedStatesofAmerica"] output:"UnitedStatesofAmerica"
 let country = ["Australis","Germany","UnitedStatesofAmerica"];
 function largestString(country){
    let ansIdx = 0;
    for(let i = 0 ; i < country.length; i++){
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen > ansLen){
            ansIdx = i;
        }
    }
    return country[ansIdx];
 }
 console.log(largestString(country));
 // Qs4. Write a JavaScript function to count the number of vowels in a String argument.
 let  str2 = "apnacollege";
 function vowelFind(str2){
   let count = 0 ;
    for(let i = 0 ; i < str2.length; i++){
        if(
            str2.charAt(i) == "a"  ||
            str2.charAt(i) == "e"  ||
            str2.charAt(i) ==  "i"  ||
            str2.charAt(i) == "o"  ||
            str2.charAt(i) == "u"
            )
            {
                count++;
            }
    }
    return count;
 }
 
 //Qs5.Write a JavaScript function to generate a random number with in a range(start,end).
let start = 100;
let end =  200;
function generateRandom(start , end){
    let diff = end - start ;
    return Math.floor(Math.random()*diff)+start ;
}
let num = generateRandom(start,end);
console.log(num);
//Qs1.Write a narrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers
let arr1 = [3,4,2,3,4,8,9,6];
const arrayAverage = (arr1) => {
    let sum = 0;
    for(let i = 0; i < arr1.length; i++){
        sum += arr1[i];
    }
    let avg  = sum/arr1.length;
    return avg;
} 
let pl = arrayAverage(arr1);
console.log(pl);
//Qs2. Write an arrow function named isEven() that takes a single number as argument and return if it is even or not
let num4 = 34;   //prompt("enter a number");
const isEven = (num4) => {
    if(num4%2 === 0 ){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(num4));


// forEach'
let arm = [
     {
    name : "aman",
    age    : 32,
},
{  
    name : "shradha",
    age :    31,
},
{
    name : "raja",
    age : 45,
},
];
arm.forEach( (ent) => {
    console.log(ent.age);
});
// Maps
let double = arr1.map( (el) => {
    return el*2;
});

let half = arm.map( (el)=> {
    return el.age /2;
})
let even = arr1.filter((el) => {
    return el%2 == 0;
});
//every  function 
[2,4,6].every((el) => {  return el%2 == 0;});
// Reduce Function 
[2,4,9].reduce((res,el) => res + el);

// Qs1.Square and sum the array elements using the arrow function and then find the average of the array.
let nums = [3,2,4,5,6,8];
const square = nums.map((nums) => nums*nums);
console.log(square);
let sum = square.reduce((acc,cur) => acc + cur, 0);
let avg = sum/nums.length;
console.log(avg); 
// Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.
console.log(nums.map((nums) => nums + 5));
// Qs3.Create a new array whose elements are in upper case of words present in the original array.
let namee = ["bhanu", "naman","danny","jack","ram","piyush"];
console.log(namee.map((na) => na.toUpperCase() ));
// Qs4.Write a function called double And Return Args which accepts an array and a variable number of arguments.
// The function should return a new array with the original array values and all of the additional arguments doubled.
const doubleAndReturnArgs = (arr, ...args)  => [
    ...arr,
    ...args.map((v) => v*2),
];
doubleAndReturnArgs([2,3,4,5,7],6,7);
// Qs5. Write a function called merge Objects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
const mergeObjects =  (obj1,obj2) => ({...obj1, ...obj2});
console.log(mergeObjects({a :1,b : 2, c :3},{d: 4}));


