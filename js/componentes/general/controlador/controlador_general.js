import ModeloGeneral from "../modelo/modelo_general.js";
import VistaMenu from "../../menu/menu.js";

const ControladorGeneral = {
    
    async traerDatosUsuario(){
        const cedula = localStorage.getItem('cedula')
        const res = await ModeloGeneral.traerDatosUsuario(cedula)

        const nombre = res.data["nombre"]
        const cedulaa = res.data["cedula"]
        const rol = res.data["rol"]

        VistaMenu.informacionMenu(nombre, cedulaa, rol)
       
        return res
    }

}
export default ControladorGeneral;