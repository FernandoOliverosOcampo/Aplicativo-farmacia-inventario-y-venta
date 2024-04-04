import Vista from "../login.js";
import Modelo from "../modelo/modelo_login.js";
import sweetAlert from "../../componentes/sweet _alert/sweetAlert.js";
const Controlador = {

    async iniciarSesion(usuario, contraseña){
        try{
            const res = await Modelo.inicioLogin(usuario, contraseña);
            const usuarioDatos = res.data.usuario[0]
            
            if (res.data.acceso === "AUTORIZADO"){

            const access_token = res.data.access_token;
            const cedula = usuarioDatos['cedula']
            console.log(cedula)

            localStorage.setItem('access_token', access_token)
            localStorage.setItem('cedula', cedula)
            Vista.redirigirIndex()


            }
            else{
                const mensaje = "Usuario no encontrado"
                sweetAlert.mostrarMensajeError(mensaje)
            }
        }catch(err){
            const mensaje = "Error al iniciar sesion"
            sweetAlert.mostrarMensajeError(mensaje)
            console.log(err)

        }
        
    }

}
export default Controlador;