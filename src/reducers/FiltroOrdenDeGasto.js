
const FiltroOrdenDeGasto = (state=[],actions)=>{
    switch(actions.type){
    case "CONSULTAR":
        console.log("Ordenes=>", actions.ordenes);
        return actions.ordenes;
    case "RESET":
        return []
    default:
        return state;
    }
}

export default FiltroOrdenDeGasto;