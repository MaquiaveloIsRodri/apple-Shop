import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/nav.css';

const Nav = (props) => {
    const InicioSesion = () => {
        if (props.Sesion === false) {
            props.SetSesion(true);
        } else {
            props.SetSesion(false);
        }
    }
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand Icono" href="#"></a>
                </div>
                <ul className="nav navbar-nav Tittles">
                    <li className="active">
                        <a href="#"className="Items home"></a>
                    </li>
                    <li className="active">
                        <a href="#"className="Items">Favoritos</a>
                    </li>
                    
                </ul>
                <button
                    className="btn btn-danger navbar-btn"
                    onClick={() => InicioSesion()}>
                        Iniciar sesion
                </button>
            </div>
        </nav>
        
    );
}

export default Nav;