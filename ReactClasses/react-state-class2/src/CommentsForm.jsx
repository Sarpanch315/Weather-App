import { useState } from "react"

export default function CommentsForm() {
    let [formData,setFormData] = useState({
        username : "",
        remark : "",
        rating : 5
    });
     let handleInputData = (event) => {
        setFormData((currdata) => {
           return {...currdata,[event.target.name] : event.target.value};
        })
     };
     let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            username : "",
            remark : "",
            rating : 5 
        })
     }
    return(
        <div>
            <h4>Give a Comment</h4>
            <form  onSubmit={handleSubmit}>
                <label htmlFor="username">UserName  </label>
                <input
                 type="text"
                  placeholder= "username"
                   value={formData.username}
                    onChange={handleInputData}
                    id="username"
                    name="username"
                />
                <br /> <br /> <br /><br />

                <label htmlFor="remark">Remark  </label>
                <textarea placeholder="Remarks!" name="remark" value={formData.remark} onChange={handleInputData} id="remark">
                </textarea>
                <br /> <br /> <br /><br />
 
                <label htmlFor="rating">Rating  </label>
                <input
                 placeholder="rating"
                  type="number"
                   value={formData.rating}
                    min={1}
                     max={10}
                     onChange={handleInputData}
                     id="rating"
                     name="rating"
                />
                <br /> <br /> 
                <button>Add Comment</button>

            </form>
        </div>
    )
}