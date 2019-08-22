import conexion_ordenes_filtro from "../conections/conexion_ordenes_filtro";

const FiltroOrdenDeGasto = async (state=[],actions)=>{
    switch(actions.type){
    case "CONSULTAR":
        let res = await conexion_ordenes_filtro(actions.filtro)
        return res;
    case "RESET":
        return []
    default:
        return state;
    }
}

export default FiltroOrdenDeGasto;