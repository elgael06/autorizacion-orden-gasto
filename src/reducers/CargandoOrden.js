
const CargandoOrden =  (state=false,actions)=>{
        switch(actions.type){
        case "CARGANDO_ORDEN":
                return actions.estatus;
        default:
                return state;
        }
}

export default CargandoOrden;