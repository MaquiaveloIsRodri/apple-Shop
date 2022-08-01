import React from "react";
import productos from '../API/index'
import '../css/Productmain.css'

const producto = await productos();
const Productmain = (props) => {

    return (
        <div className="container">
            {
                producto.map(produc => {
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
                    )
                })
            }
        </div>
        )
    } 
export default Productmain;