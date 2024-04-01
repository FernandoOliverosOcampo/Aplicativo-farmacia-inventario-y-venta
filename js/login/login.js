import Controlador from "./controlador/controlador_login.js";
const Vista = {
    obtenerDatos(){
        const usuario = document.getElementById("usuario").value;
        const contraseña = document.getElementById("contrasena").value;

        return {usuario, contraseña};
    }, 
    redirigirIndex(){
        location.href ="../index.html"
    }

}
export default Vista;

document.addEventListener('DOMContentLoaded', function(){
   


});

const btnIniciarSesion = document.getElementById('btnIngresar');
btnIniciarSesion.onclick = function(){
    Controlador.iniciarSesion()
}

