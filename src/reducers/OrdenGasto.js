import conexion_orden_gasto_folio from '../conections/conexion_orden_gasto_folio';

const OrdenGasto= async (state=[],actions)=>{
    switch (actions.type) {
        case "ADD":
            let res = await conexion_orden_gasto_folio(actions.folio);
            return res;    
        default:
            return state;
    }
}

export default OrdenGasto;