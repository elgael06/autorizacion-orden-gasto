import Axios from "axios";
import ip from "./host";

const conexion_ordenes_filtro= async filtro=>{
    console.log("consulta =>",filtro);
    try{
        let respuesta = await Axios.get(`${ip}/api/FiltroOrdenDeGasto?filtro=${filtro}`);
        if(respuesta.status === 200){
            return respuesta.data;
        }
    }catch{
        console.log("Error Conexion...")
    }
    return null;
}
export default conexion_ordenes_filtro;