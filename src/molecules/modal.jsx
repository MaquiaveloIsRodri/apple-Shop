import React from "react";
import "../css/modal.css";
import { useState } from "react";
import validacion from "../API/validation.js";

function Password(props) {
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const handletImputChange= (e) => {
        e.preventDefault();
        const result=validacion(correo,password);             
        result.then(res=>{
            if( res.sesionJson === true){
                props.setWithin(true);
                props.SetSesion(false);
            }else{
                alert("Usuario o contraseña incorrectos");
            }
        }) 
        
    }
    return (
        <div className="Conteiner-Form">
            <form onSubmit={handletImputChange}>
                <div className="form-group">
                    <label>Correo:</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Ingrese su correo"
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label for="pwd">Contraseña:</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="pwd"
                        placeholder="Ingrese su contraseña"
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" /> Remember me</label>
                </div>
                <button 
                    type="submit" 
                    className="btn btn-default">
                        Enviar
                </button>
                <button 
                    className="btn btn-default boton-cancelar"
                    onClick={() => {props.SetSesion(false)}}>
                        Cancelar
                        
                </button>
            </form>
        </div>
    )
}
export default Password;