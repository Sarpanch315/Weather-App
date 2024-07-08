import Product from "./Product.jsx";

function ProductTab() {
    let style = {
        display : "flex",
        flexWrap : "wrap",
        justifyContent : "center",
        alignItems : "center"
    };
    return (
    <div style={style}>
        
        <Product title = "Logitec MX Master" idx = {0} />
        <Product title = "Apple Pencil (2 Gen)" idx = {1}  />
        <Product title = "Zebronics Zen-"  idx = {2} />
        <Product title = "Petronics Tod 23" idx = {3} />
    </div>
    );
}

export default ProductTab;