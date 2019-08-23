
const OrdenGasto=  (state=[],actions)=>{
    switch (actions.type) {
        case "ADD_ORDEN":
            return actions.orden;    
        case "REMOVE_ORDEN":
            return {};
        default:
            return state;
    }
}

export default OrdenGasto;