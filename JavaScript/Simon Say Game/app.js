let gameSeq = [];
let userSeq  = [];
let highscore = [];
 let btns = ["yellow","purple","green","blue"];
let started = false;
let level = 0;
 let h2 = document.querySelector("h2"); 
document.addEventListener("keypress", function() {
     if (started == false) {
         console.log("Game Started");
         started = true;

         levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flashbtn");
    setTimeout(function(){
        btn.classList.remove("flashbtn");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


function levelup(){
  level++;
  userSeq=[];
  h2.innerText = `Level  ${level}`;
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  
  gameFlash(randbtn);
}

function checkbtn(idx)
{
    if(userSeq[idx] === gameSeq[idx])
    {
        if(userSeq.length === gameSeq.length){
            setTimeout(levelup, 1000);
        }
        console.log("level up");
    }
    else {
        h2.innerHTML = ` Game Over ! Your score was <b>${level}</b> <br>Press any key to start the game`;
        document.querySelector("body").style.backgroundcolor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundcolor = "white";
        },150)
        reset();
    }
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
function btnPress(){
    
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id")
    userSeq.push(userColor);
    checkbtn(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
}