
async function validacion(Correo  , Password){
    
    const sesion = await fetch(`https://shopp-apple-express.herokuapp.com/api/sesion`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "correo":Correo,
            "contraseña":Password,
        })
    });
    const sesionJson = await sesion.json();
    return {sesionJson};
}

export default validacion;