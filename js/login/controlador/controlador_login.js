import Vista from "../login.js";

const Controlador = {

    iniciarSesion(){
        const {usuario, contraseña} = Vista.obtenerDatos()
        console.log(usuario, contraseña)
        Vista.redirigirIndex()
    }

}
export default Controlador;