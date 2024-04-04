// import ControladorGeneral from "../general/controlador/controlador_general.js";

const VistaMenu = {
    opcionesMenu(){
        const menu = document.getElementById("opciones");

        menu.innerHTML = 
        `
        <li><a href=""><i class="fa-solid fa-house"></i> Dashboard</a></li>
        <li><a href=""><i class="fa-regular fa-clipboard"></i> Registro de ventas</a></li>
        <li><a href=""><i class="fa-solid fa-shop"></i> Registro de productos</a></li>
        <li><a href=""><i class="fa-solid fa-box-archive"></i> Inventario</a></li>
        <li> <a href=""><i class="fa-regular fa-user"></i> Opciones de usuario</a></li>
        `
        return menu;

    },

    informacionMenu(nombre, cedulaa, rol){
        
        // const data = res.data['data']
        // console.log(data)
        // const nombre = res.data["nombre"]
        // const cedula = res.data["cedula"]
        // const rol = res.data["nombre"]
        const menuInformacion = document.getElementById("menuInformacion");

        menuInformacion.innerHTML = 
        `
        <div class="logo-info">
            <img src="./imagenes/logoo.webp" alt="Logo farmacia Oliveros">
        </div>
        <div class="info-usuario">
            <p>${nombre}</p>
            <p>${cedulaa}</p>
            <p>${rol}</p>
        </div>
        `
        return menuInformacion;

    }
}
export default VistaMenu;

// document.addEventListener('DOMContentLoaded', function(){
//     //  ControladorGeneral.traerDatosUsuario()
// })