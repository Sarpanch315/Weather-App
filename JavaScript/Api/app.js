let url = "http://universities.hipolabs.com/search?name=";
let country = "nepal";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    let result = await getcollege(country);

    show(result);

})

function show(result){
    let list = document.querySelector("ul");
    list.innerText = "";
    for(arr of result){
        let li = document.createElement("li");
        li.innerText = arr.name;
        list.appendChild(li);

    }
}

async function getcollege(country) {
    try{
         let item = await axios.get(url + country);
         return item.data;
        }
    catch(error){
        console.log("there is a error" + error);
        return "error in url";
    }    
}