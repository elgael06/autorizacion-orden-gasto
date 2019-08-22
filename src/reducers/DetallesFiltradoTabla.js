
const DetallesFiltradoTabla = (state="",actions)=>{
    switch(actions.type){
        case "FILTRAR_TABLA":
            return actions.filtrado;
        default:
            return state;
    }
}

export default DetallesFiltradoTabla;