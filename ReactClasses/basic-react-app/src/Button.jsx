function printHello(){
    console.log("Hello !");
}
function printBye(){
    console.log("Bye!!");
}

function onDbClick(event){
    console.log("You Clicked double");
    console.log(event);
}
export default function Button () {
    return(
      <div>
        <button onClick={printHello}>Click Me!</button>
        <p onMouseOver={printBye}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima porro in aliquid at 
           repellendus incidunt reprehenderit ipsa reiciendis labore vitae eveniet repudiandae,
           magnam,ut, excepturi voluptates. Repudiandae quae odio repellendus.
        </p>
        <button onDoubleClick={onDbClick}>Double Click !!</button>
      </div>
    );
}