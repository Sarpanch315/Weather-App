
function formSubmmit(){
    event.preventDefault();
    console.log("Form Submitted");
}

export default function Form(){
    return (
     <form onSubmit={formSubmmit}>
        <input placeholder="Write Somthing" />
        <button >Submitted</button>
     </form>
    );
}