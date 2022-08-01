async function Producto(){
    const productos = await fetch('https://shopp-apple-express.herokuapp.com/api/Productos');
    const productosJson = productos.json();
    return productosJson;
}

export default Producto;