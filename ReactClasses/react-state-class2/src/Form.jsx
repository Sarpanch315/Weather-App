import { useState } from "react"

export default function Form(){
    let [formData,setFormData] = useState({
        fullName : " ",
        userName : " ",
        password : ""
    })
    //let handleFullName = (event) => {
     //   setFullName(event.target.value)
        
    //}
    //let handleUserName = (event) => {
      //  setUserName(event.target.value)
        
    //}
    let handleInputName = (event) => {
        //let fieldName = event.target.name;
        //let fieldValue = event.target.value;
        
        setFormData((currdata) => {
            return {...currdata ,[event.target.name] : event.target.value};
        });
    };
    let handleDefault = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            fullName: "",
            userName : "",
            password : ""
        })
    }
    return(
        <form  onSubmit={handleDefault}>
            <label htmlFor="fullname"> Full name </label>
            <input
             placeholder="full name" 
             type="text" 
             value={formData.fullName} 
             onChange={handleInputName} 
             id="fullname"
             name="fullName"
            />
            <br />
            <label htmlFor="userName"> User Name  </label>
            <input
             placeholder="user name" 
             type="text" 
             value={formData.userName} 
             onChange={handleInputName} 
             id="userName"
             name="userName"
            />
            <br />
            <label htmlFor="passWord"> PassWord    </label>
            <input
             placeholder="Password" 
             type="password" 
             value={formData.password} 
             onChange={handleInputName} 
             id="password"
             name="password"
            />
            <br />
            <button>Submit </button>
        </form>
    )
}