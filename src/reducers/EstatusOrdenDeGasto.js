
const EstatusOrdenDeGasto =(state="Pendiente",actions)=>{
    switch(actions.type){
        case "ADD":
            console.log("filtro=>",actions.filtro)
            return actions.filtro;
        default:
            return state;
    }
}

export default EstatusOrdenDeGasto;