import React from "react";
import Producto from '../API/index'
import '../css/Productmain.css'
import { useState , useEffect} from "react";


const Productmain = (props) => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const ProductosAsync = async () => {
            const productos = await Producto();
            setProductos(productos);
        }
        ProductosAsync();
    }, [])
    return (
        <div className="container">
            {
                productos.map(produc => {
                    return (
                        <div className="container-tags" key={produc.id}>
                            <h1 className="tittle-tag">{produc.nombre}</h1>
                            <p className="descripcion-tag" >{produc.descripcion}</p>
                            <img src={produc.image} alt="" className="image-tag"/>
                            <p className="precio-tag">{produc.precio}</p>
                            <button 
                                className="btn btn-danger navbar-btn button-tag"
                                onClick={() => {
                                    props.setId(produc.id)
                                    props.setBuy(true)
                                }}
                                disabled={props.within===true ? false : true}
                            >
                                <span className="shppp-cart-tag"></span>
                            </button>
                        </div>
                    )})}
        </div>
        )
    } 
export default Productmain;

/*producto().then (data => {
    )
}).catch(err => {
    console.log(err)
}
)
*/