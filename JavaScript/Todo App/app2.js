let input = document.querySelector("input");
let btn    = document.querySelector("button");
let ul       = document.querySelector("ul");
btn.addEventListener("click",function(){
   
    let item = document.createElement("li");
    item.innerText = input.value;
    
    let dlt = document.createElement("button");
    dlt.innerText = "delete";
    dlt.classList.add("delete");
  
    item.appendChild(dlt);
    ul.appendChild(item);
    input.value = "";
});
ul.addEventListener("click",function(){
    
    if(event.target.nodeName = "BUTTON"){
     let pa = event.target.parentElement;
     pa.remove();
    }
})
/*let delBtn = document.querySelectorAll(".delete");
for (delt of delBtn){
delt.addEventListener("click", function(){
   let par = this.parentElement;
   par.remove();
}); }*/