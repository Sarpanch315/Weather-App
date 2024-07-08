import { useState } from "react";
export default function LikeButton() {
    let [isLiked,setIsLiked] = useState(false);
    let [click,setClick] = useState(0);
    
    let toggleLiked = () => {
        setIsLiked(!isLiked);
        setClick(click+1);
        
    }
    let likeStyle = {
        color: "red"
    }
    return (
        <div>
            <span>Likes {click}  <span onClick={toggleLiked}>
                { isLiked ? <i className="fa-solid fa-heart" style={likeStyle}></i> :<i className="fa-regular fa-heart"></i>}
                
                
            </span></span>
            
            
        </div>
    )
}