import ControladorGeneral from "./controlador/controlador_general.js";
const VistaGeneral = {
    verificarToken(){
        const token = localStorage.getItem("access_token");
        if (!token) {
            // Si no hay un token, redirigir al usuario a la página de inicio de sesión
            window.location.href = "./pages/login.html";
        }

    }
}
export default VistaGeneral;


document.addEventListener('DOMContentLoaded', function(){
   VistaGeneral.verificarToken()
   ControladorGeneral.traerDatosUsuario()
})