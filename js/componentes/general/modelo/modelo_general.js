import config from "../../../supabase/keys.js";

const ModeloGeneral ={

    traerDatosUsuario(cedula){

        const res = axios({
            method: 'GET',
            url: `http://127.0.0.1:5600/info-usuarios/${cedula}`,
            headers: config.headers
        })
        return res

    }

}
export default ModeloGeneral;