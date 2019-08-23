
const  VistaModalAutorizacion =  (state=false,actions)=>{
    switch (actions.type) {
        case "MOSTAR_MODAL_AUTORIZACION":
            return actions.estatus;
        default:
            return state;
    }
}
export default VistaModalAutorizacion;