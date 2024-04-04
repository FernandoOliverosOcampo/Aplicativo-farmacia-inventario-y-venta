import Modelo from "../modelo/modelo_home.js";
import VistaMenu from "../../componentes/menu/menu.js";
import sweetAlert from "../../componentes/sweet _alert/sweetAlert.js";

const Controlador = {

    iniciarPagina(){
        const mensaje = "Cargando información..."
        sweetAlert.mensajeDeCarga(mensaje)
        VistaMenu.opcionesMenu()
        VistaMenu.informacionMenu()
    },
    
    // async traerDatosUsuario(){
    //     const cedula = localStorage.getItem('cedula')
    //     console.log(cedula)

    //     const res = await Modelo.traerDatosUsuario(cedula)

    //     console.log(res.data["data"])
    //     return res
    // }

}
export default Controlador;