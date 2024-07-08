import "./Product.css";

import Price from "./Price.jsx";
function Product({title,idx}) {
    let oldPrice = ["1200","14000","1233","509"];
    let newPrice = ["1100","1300","1133","408"];
    let Description = [
        ["8,000 DPI","five programmable button"],
        ["Intutive surface","designed for iPad Pro"],
        ["designed for iPad Pro","Intutive surface"],
        ["Wireless","8,000 DPI"],
    ];
    return (
        <div className="Product" >
          <h2>{title} </h2>
          <p>{Description[idx][0]}</p>
          <p>{Description[idx][1]}</p>
          <Price oldPrice = {oldPrice[idx]} newPrice = {newPrice[idx]} />
        </div>
    );
  
}
export default Product;