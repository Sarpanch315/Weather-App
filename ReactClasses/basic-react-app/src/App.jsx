import "./App.css"
 import  Button  from "./Button.jsx";
 import Form from "./Form.jsx";
import ProductTab from "./ProductTab.jsx"
//import Product from "./Product.jsx";
//<MessageBox />
//<Product title = "Laptop" price = {110000} />
//<Product title = "Pen" price = {20000} />
//<Product title = "Book" price = {40000} />
//return<ProductTab/> <ProductTab/>
function App(){
  return(
    <>
      <h1>Blockbuster Deals  |  Shop Now</h1>
      <ProductTab/>
      <Button/>
      <br />
      <Form/>

      
    </>
    
  );

}

export default App;
