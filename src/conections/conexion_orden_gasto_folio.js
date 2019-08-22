import Axios from "axios";
import ip from "./host";

const conexion_orden_gasto_folio = async folio=>{
    let respuesta = await Axios.get(`${ip}/api/ConsultarOrdeneDeGasto?id=${folio}`);
    if(respuesta.status){
        return respuesta.data;
    }
    return null;
}

export default conexion_orden_gasto_folio;